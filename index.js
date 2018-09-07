var projectData;
var projectNames
var handlebars;
var index = 0;

$(document).ready(function() {
    handlebars = require('handlebars');  // Templating

    handlebars.registerHelper('carousel-li', function(curIndex, activeIndex){
        console.log(curIndex + "==" + activeIndex)
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

    var projectSource = document.getElementById("project-template").innerHTML;
    var projectTemplate = handlebars.compile(projectSource);
    var template = projectTemplate(templateData);
    document.getElementById('project-viewer').innerHTML = template;

    // Ensure carousel is active
    $('.carousel-inner .item:first').addClass('active');

    bindProjectCarouselEvents();
}