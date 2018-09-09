var projectData;
var projectNames
var handlebars;
var index = 0;

$(document).ready(function() {
    handlebars = require('handlebars');  // Templating

    handlebars.registerHelper('carousel-li', function(curIndex, activeIndex){
        if (curIndex == activeIndex){
            return new handlebars.SafeString(
                '<li class="active"></li>'
            )
        }
        return new handlebars.SafeString(
            '<li></li>'
        )
    })

    getProjectData();
});

function getProjectData() {
    $.ajax({
        dataType: "json",
        url: 'static/data/projects.json',
        mimeType: "application/json",
        success: function(data) {
            projectData = data;
            projectNames = Object.keys(projectData);
            displayProject('greatBear');
            bindProjectDisplayEvents();
        }
    });
}

function bindProjectDisplayEvents(){
    $('.project-box').on('click', function() {
        var project = this.dataset.project;

        $(this).siblings().each(function(i, elem){
            $(elem).removeClass('selected');
        })
        $(this).addClass("selected");

        displayProject(project);
    })
}

function bindProjectCarouselEvents(){
    $('.project-control-next').on('click', function() {
        index = (index + 1) % projectNames.length;
        displayProject(projectNames[index]);
    })
    $('.project-control-prev').on('click', function() {
        index = index - 1;
        if (index < 0) {
            index = projectNames.length - 1;
        }
        displayProject(projectNames[index]);
    })
}

function displayProject(projectName){
    project = projectData[projectName];

    var templateData = {};
    $.extend(true, templateData, project);
    templateData.description = templateData.description.reduce(function(x, y){return x + y;});
    templateData.commentary = templateData.commentary.reduce(function(x, y){return x + y;});
    templateData.project_names = projectNames;
    templateData.index = index;

    // TODO: This is essentially a lazy load. But we don't 
    // memoize the new templates so we'll get loads of dupes. Whoops!
    var prevProject = document.getElementsByClassName("project active")[0]
    var projectSource = document.getElementById("project-template").innerHTML;
    var projectTemplate = handlebars.compile(projectSource);
    var template = $(projectTemplate(templateData));
    $('#project-viewer').prepend(template);
    template.addClass('active');

    // Ensure carousel is active
    $('.carousel-inner .item:first').addClass('active');

    // TODO: Revisit this, too many binds happening
    bindProjectCarouselEvents();

    // Clean up
    if (prevProject){
        // prevProject.classList.remove('active');
        prevProject.classList.remove('slide');
        prevProject.classList.add('slide-out');
    }
}