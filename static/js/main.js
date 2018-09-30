(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var projectData;
var projectNames
var handlebars;
var index = 0;

$(document).ready(function() {
    Handlebars.registerHelper('carousel-li', function(curIndex, activeIndex){
        if (curIndex == activeIndex){
            return new Handlebars.SafeString(
                '<li class="active"></li>'
            )
        }
        return new Handlebars.SafeString(
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
            bindProjectCarouselEvents();
            displayProject('greatBear');
            bindProjectDisplayEvents();
        }
    });
}

function bindProjectDisplayEvents(){
    $('.project-box').on('click', function() {
        var prevProject = $(".project.active");
        var project = this.dataset.project;

        $(this).siblings().each(function(i, elem){
            $(elem).removeClass('selected');
        })
        $(this).addClass("selected");

        prevProject.removeClass("active");
        displayProject(project);
    })
}

function bindProjectCarouselEvents(project){
    $('.project-control-next').on('click', nextProject);
    $('.project-control-prev').on('click', prevProject);
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
    var template = displayProject(projectNames[index]);
    template.addClass('slide-in-next');
    prevProject.addClass('slide-out-next');
    prevProject.one('animationend', function(){
        prevProject.removeClass('active');
    });
}

function prevProject(){
    index = index - 1;
    if (index < 0) {
        index = projectNames.length - 1;
    }
    var prevProject = $(".project.active");
    var template = displayProject(projectNames[index]);
    template.addClass('slide-in-prev');
    prevProject.addClass('slide-out-prev');
    prevProject.one('animationend', function(){
        prevProject.removeClass('active');
    });
}

function displayProject(projectName){
    var template = createTemplate(projectName);
    template.addClass('active');
    $('#project-viewer').append(template);
    return template;
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

    var template = $(Handlebars.templates.mobileProject(templateData));

    $('#project-viewer').append(template)
    
    // Ensure carousel is active
    template.find('.carousel-inner .item:first').addClass('active');

    bindProjectAnimationEvents(template);
    
    return template;

}
},{}]},{},[1]);
