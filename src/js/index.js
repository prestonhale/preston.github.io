var projectData;
var projectNames
var handlebars;
var index = 0;
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
});

function getProjectData() {
    $.ajax({
        dataType: "json",
        url: 'static/data/projects.json',
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

function displayProjectTitleCards(){
    var index = 0;
    for (var projectName in projectData){
        var project = projectData[projectName];
        var titleCard = $('.projectTitleCardTemplate').clone();
        titleCard.find('img').attr('src', project.thumbnail_image)
        titleCard.find('.projectTitleCard').attr("data-project-index", index)
        $('.projectSelector').append(titleCard.html());
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
    index = (index + 1) % projectNames.length;
    var prevProject = $(".project.is-active");
    displayProjectAtIndex(index);
    prevProject.removeClass('is-active');
    bindProjectCarouselEvents();
}

function animatedNextProject() {
    if (projectAnimating){
        return;
    }
    projectAnimating = true;
    index = (index + 1) % projectNames.length;
    var prevProject = $(".project.is-active");
    var template = displayProjectAtIndex(index);
    template.addClass('slide-in-next');
    prevProject.addClass('slide-out-next');
    prevProject.one('animationend', function () {
        prevProject.removeClass('is-active');
        bindProjectCarouselEvents();
        projectAnimating = false;
    });
}

function prevProject(){
    if (index < 0) {
        index = projectNames.length - 1;
    }
    var prevProject = $(".project.is-active");
    displayProjectAtIndex(index);
    prevProject.removeClass('is-active');
    bindProjectCarouselEvents();
}

function animatedPrevProject() {
    if (projectAnimating){
        return;
    }
    projectAnimating = true;
    index = index - 1;
    if (index < 0) {
        index = projectNames.length - 1;
    }
    var prevProject = $(".project.is-active");
    var template = displayProjectAtIndex(index);
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

    var template = $(Handlebars.templates.mobileProject(templateData));

    $('.project-viewer').append(template)

    // Ensure carousel is active
    template.find('.carousel-inner .item:first').addClass('active');
    template.find('.mobileNextProject-btn').on('click', nextProject);

    bindProjectAnimationEvents(template);

    return template;

}