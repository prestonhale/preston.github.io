var projectData;
var handlebars;
var index = 0;

$(document).ready(function() {
    handlebars = require('handlebars');  // Templating
    getProjectData();
});

function getProjectData() {
    $.ajax({
        dataType: "json",
        url: 'static/data/projects.json',
        mimeType: "application/json",
        success: function(data) {
            projectData = data;
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
    let projectNames = Object.keys(projectData);
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

    var projectSource = document.getElementById("project-template").innerHTML;
    var projectTemplate = handlebars.compile(projectSource);
    var template = projectTemplate(templateData);
    document.getElementById('project-viewer').innerHTML = template;

    // Ensure carousel is active
    $('.carousel-inner .item:first').addClass('active');

    bindProjectCarouselEvents();
}