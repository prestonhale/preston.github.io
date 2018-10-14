var yaml = require('js-yaml');

var handlebars;
var writingData;
var writingIndex;
var prevPosts = 4;

var projectData;
var projectNames;
var projectIndex = 0;
var projectAnimating = false;

$(document).ready(function () {
    Handlebars.registerHelper('carousel-li', function (curIndex, active) {
        if (active) {
            return new Handlebars.SafeString(
                '<li data-target=".project-carousel-"' + curIndex + '" data-slide-to="' + curIndex + '" class="active"></li>'
            )
        }
        return new Handlebars.SafeString(
            '<li data-target=".project-carousel-"' + curIndex + '" data-slide-to="' + curIndex + '"></li>'
        )
    })

    getProjectData();
    getWritingData();
    bindTabEvents();
});

function getProjectData() {
    $.ajax({
        dataType: "json",
        url: 'projects.json',
        mimeType: "application/json",
        success: function (data) {
            projectData = data;
            projectNames = Object.keys(projectData);
            displayProjectTitleCards();
            bindProjectCarouselEvents();
            displayProjectAtIndex(0);
            bindProjectDisplayEvents();
        }
    });
}

function getWritingData() {
    console.log("off we go");
    $.ajax({
        dataType: "text",
        url: 'writing.yml',
        mimeType: "text/x-yaml",
        success: function (data){
            try {
                writingData = yaml.safeLoad(data);
                writingIndex = writingData.length - 1;
                renderWritingIndex(writingIndex);
            } catch (e) {
                console.log(e);
            }
        }
    });
}

function bindTabEvents(){
    $('.sectionTab').on('click', activateTab);
}

function displayProjectTitleCards(){
    var index = 0;
    for (var projectName in projectData){
        var project = projectData[projectName];
        var titleCardClone = $('.projectTitleCardTemplate').clone();
        var titleCard = titleCardClone.find('.projectTitleCard')
        titleCard.find('img').attr('src', project.thumbnail_image)
        titleCard.attr("data-project-index", index)
        if (index === 0){
            titleCard.addClass('is-selected');
        }
        $('.projectSelector').append(titleCardClone.html());
        index += 1;
    }
}

function bindProjectDisplayEvents() {
    $('.projectTitleCard').on('click', function () {
        var prevProject = $(".project.is-active");
        var projectIndex = this.dataset.projectIndex;

        $(this).siblings().each(function (i, elem) {
            $(elem).removeClass('is-selected');
        })
        $(this).addClass("is-selected");

        prevProject.removeClass("is-active");
        displayProjectAtIndex(projectIndex);
    })
}

function bindProjectCarouselEvents() {
    $('.projectControl-next').on('click', animatedNextProject);
    $('.projectControl-prev').on('click', animatedPrevProject);
}

function bindProjectAnimationEvents(project) {
    var projects = $('.project')
    project.on('animationend', function () {
        projects.removeClass('slide-out-next slide-in-next slide-out-prev slide-in-prev');
    })
}

function nextProject(){
    projectIndex = (projectIndex + 1) % projectNames.length;
    var prevProject = $(".project.is-active");
    displayProjectAtIndex(projectIndex);
    prevProject.removeClass('is-active');
    bindProjectCarouselEvents();
}

function animatedNextProject() {
    if (projectAnimating){
        return;
    }
    projectAnimating = true;
    projectIndex = (projectIndex + 1) % projectNames.length;
    var prevProject = $(".project.is-active");
    var template = displayProjectAtIndex(projectIndex);
    template.addClass('slide-in-next');
    prevProject.addClass('slide-out-next');
    prevProject.one('animationend', function () {
        prevProject.removeClass('is-active');
        bindProjectCarouselEvents();
        projectAnimating = false;
    });
}

function prevProject(){
    if (projectIndex < 0) {
        projectIndex = projectNames.length - 1;
    }
    var prevProject = $(".project.is-active");
    displayProjectAtIndex(projectIndex);
    prevProject.removeClass('is-active');
    bindProjectCarouselEvents();
}

function animatedPrevProject() {
    if (projectAnimating){
        return;
    }
    projectAnimating = true;
    projectIndex = projectIndex - 1;
    if (projectIndex < 0) {
        projectIndex = projectNames.length - 1;
    }
    var prevProject = $(".project.is-active");
    var template = displayProjectAtIndex(projectIndex);
    template.addClass('slide-in-prev');
    prevProject.addClass('slide-out-prev');
    prevProject.one('animationend', function () {
        prevProject.removeClass('is-active');
        bindProjectCarouselEvents();
        projectAnimating = false;
    });
}

function displayProjectAtIndex(index) {
    var template = createTemplate(index, projectNames[index]);
    template.addClass('is-active');
    $('.project-viewer').append(template);
    return template;
}

function createTemplate(index, projectName) {
    var all = $(".project[data-name=" + projectName + "]");
    var existingProject = all.first();
    if (existingProject.length > 0) {
        return $(existingProject);
    }

    project = projectData[projectName];

    var templateData = {};
    $.extend(true, templateData, project);
    templateData.description = templateData.description.reduce(function (x, y) { return x + y; });
    templateData.commentary = templateData.commentary.reduce(function (x, y) { return x + y; });
    templateData.project_name = projectName;
    templateData.project_names = projectNames;
    templateData.index = index;

    var template = $(Handlebars.templates.project(templateData));

    $('.project-viewer').append(template)

    // Ensure carousel is active
    template.find('.carousel-inner .item:first').addClass('active');
    template.find('.mobileNextProject-btn').on('click', nextProject);

    bindProjectAnimationEvents(template);

    return template;
}

function activateTab(event){
    event.preventDefault();
    event.stopPropagation();
    var tab = $(event.currentTarget);
    tab.siblings().removeClass('is-active');
    tab.addClass('is-active');
    performTabActiveActions(tab);
}

function performTabActiveActions(tab){
    var tabName = tab.data('tab-name');
    centralContainerChildren = $('.centralContainer').children();
    var activeTabContent = centralContainerChildren.filter('[data-container-name='+tabName+']')[0];
    if (activeTabContent){
        centralContainerChildren.removeClass('is-active');
        $(activeTabContent).addClass('is-active');
    } else {
        console.log('No content found.');
    }
}

function renderWritingIndex(index){
    writingIndex = index;
    var firstWriting = writingData[writingIndex]
    $('.writingContainer-title').html(firstWriting['title']);
    $('.writingContainer-content').html(firstWriting['content']);
    renderPreviousPosts();
}

function renderPreviousPosts(){
    var titles = "";
    if (writingIndex === 0){
        titles = "No Previous Posts";
    }
    for (var i = 1; i <= prevPosts; i ++){
        var postIndex = writingIndex - i;
        if (postIndex < 0) break;
        var title = writingData[postIndex]['title']
        var html = "<a class=\"writingContainer-postLink\" href=\"#projects\" data-writing-index=" + postIndex + ">" + title + "</a>"
        titles += html;
    }
    $('.writingContainer-prevPostsContent').html(titles);
    bindPostLinks();
}

function bindPostLinks(){
    $('.writingContainer-postLink').on('click', function(event){
        var postIndex = $(event.currentTarget).data('writing-index');
        renderWritingIndex(postIndex);
    })
}