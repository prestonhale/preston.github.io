
$(document).ready(function() {
    var handlebars = require('handlebars');  // Templating

    var greatBearSource = document.getElementById("greatBear-template").innerHTML;
    var greatBearTemplate = handlebars.compile(greatBearSource);

    var keepItGroovySource = document.getElementById("keepItGroovy-template").innerHTML;
    var keepItGroovyTemplate = handlebars.compile(keepItGroovySource);

    var priestSimulatorSource = document.getElementById("priestSimulator-template").innerHTML;
    var priestSimulatorTemplate = handlebars.compile(priestSimulatorSource);


    $('.project-box').on('click', function() {
        var project = this.dataset.project;
        var template = "";

        $(this).siblings().each(function(i, elem){
            $(elem).removeClass('selected');
        })
        $(this).addClass("selected");

        switch(project){
            case 'greatBear':
                template = greatBearTemplate({});
                break;
            case 'keepItGroovy':
                template = keepItGroovyTemplate({})
                break;
            case 'priestSimulator':
                template = priestSimulatorTemplate({})
                break;
        }
        document.getElementById('project-viewer').innerHTML = template;
    })
    
    document.getElementById('project-viewer').innerHTML = greatBearTemplate({});
});