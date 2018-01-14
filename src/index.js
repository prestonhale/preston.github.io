
$(document).ready(function() {
    var handlebars = require('handlebars');  // Templating

    console.log("Start");
    var greatBearSource   = document.getElementById("greatBear-template").innerHTML;
    var greatBearTemplate = handlebars.compile(greatBearSource);

    // var keepItGroovySource   = document.getElementById("keepItGroovy-template").innerHTML;
    // var keepItGroovyTemplate = Handlebars.compile(keepItGroovySource);

    // var priestSimulatorSource   = document.getElementById("priestSimulator-template").innerHTML;
    // var priestSimulatorTemplate = Handlebars.compile(priestSimulatorSource);

    document.getElementById('project-viewer').innerHTML = greatBearTemplate({});

    console.log("Done");
});