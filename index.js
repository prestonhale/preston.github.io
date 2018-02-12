var projectData;
var handlebars;

$(document).ready(function() {
    handlebars = require('handlebars');  // Templating
    getProjectData();
});

function getProjectData() {
    $.getJSON(
        'static/data/projects.json',
        function(data){
            projectData = data;
            bindProjectDisplayEvents();
            displayProject('greatBear');
        }
    );
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
}