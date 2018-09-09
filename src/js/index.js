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

function bindProjectCarouselEvents(project){
    project.find('.project-control-next').on('click', nextProject);
    project.find('.project-control-prev').on('click', prevProject);
}

function bindProjectAnimationEvents(project){
    var projects = $('.project')
    project.on('animationend', function() {
        projects.removeClass('slide-out-next slide-in-next slide-out-prev slide-in-prev');
    })
}

function nextProject(){
    index = (index + 1) % projectNames.length;
    var prevProject = $(".project.active");
    var template = createTemplate(projectNames[index]);
    template.addClass('slide-in-next active');
    prevProject.addClass('slide-out-next');
    prevProject.removeClass('active');
}

function prevProject(){
    index = index - 1;
    if (index < 0) {
        index = projectNames.length - 1;
    }
    console.log(index);
    var prevProject = $(".project.active");
    var template = createTemplate(projectNames[index]);
    template.addClass('slide-in-prev active');
    prevProject.addClass('slide-out-prev');
    prevProject.removeClass('active');
}

function displayProject(projectName){
    var template = createTemplate(projectName);
    $('#project-viewer').append(template);
}

function createTemplate(projectName){
    var all = $(".project[data-name=" + projectName + "]");
    var existingProject = all.first();
    if (existingProject.length > 0){
        return $(existingProject);
    }

    project = projectData[projectName];

    var templateData = {};
    $.extend(true, templateData, project);
    templateData.description = templateData.description.reduce(function(x, y){return x + y;});
    templateData.commentary = templateData.commentary.reduce(function(x, y){return x + y;});
    templateData.project_name = projectName;
    templateData.project_names = projectNames;
    templateData.index = index;

    var projectSource = document.getElementById("project-template").innerHTML;
    var projectTemplate = handlebars.compile(projectSource);
    var template = $(projectTemplate(templateData));

    // Ensure carousel is active
    $('.carousel-inner .item:first').addClass('active');
    $('#project-viewer').append(template)

    bindProjectCarouselEvents(template);
    bindProjectAnimationEvents(template);
    
    return template;

}