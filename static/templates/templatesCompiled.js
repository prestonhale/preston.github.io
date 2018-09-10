(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['project'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "            "
    + container.escapeExpression((helpers["carousel-li"] || (depth0 && depth0["carousel-li"]) || helpers.helperMissing).call(depth0,(data && data.index),(depths[1] != null ? depths[1].index : depths[1]),{"name":"carousel-li","hash":{},"data":data}))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"project-title\">\r\n            <h3>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <!-- Carousel -->\r\n    <div id=\"project-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <!-- Indicators -->\r\n        <ol class=\"carousel-indicators\">\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n        </ol>\r\n        \r\n        <!-- Wrapper for slides -->\r\n        <div class=\"carousel-inner\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.carousel_images : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        \r\n        <!-- Left and right controls -->\r\n        <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n        </a>\r\n    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"item\">\r\n                <img width=900 height=500 src=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\">\r\n            </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <!-- Raw Content TODO: Make scrolltown invisible on mobile-->\r\n    <!-- "
    + ((stack1 = ((helper = (helper = helpers.raw_content || (depth0 != null ? depth0.raw_content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"raw_content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " -->\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "            "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "<br>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "        <div class=\"download-link text-center\">\r\n            <a href=\""
    + alias3(((helper = (helper = helpers.download_link || (depth0 != null ? depth0.download_link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"download_link","hash":{},"data":data}) : helper)))
    + "\">\r\n                <div class=\"interact-button download-button text-center\">\r\n                    Download Game\r\n                </div>\r\n            </a>\r\n            <span class=\"controller-warning\">"
    + alias3(((helper = (helper = helpers.controller_warning || (depth0 != null ? depth0.controller_warning : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"controller_warning","hash":{},"data":data}) : helper)))
    + "\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"project active\" data-name=\""
    + alias3(((helper = (helper = helpers.project_name || (depth0 != null ? depth0.project_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"project_name","hash":{},"data":data}) : helper)))
    + "\">\r\n    <!-- Main Content -->\r\n    <!-- TODO: Clean up data model for this -->\r\n    <div class=\"project-header\">\r\n    <div class=\"header-image\">\r\n        <img width=100% src=\""
    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.carousel_images : depth0)) != null ? stack1["0"] : stack1), depth0))
    + "\">\r\n    </div>\r\n    <ol class=\"carousel-indicators\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.project_names : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\r\n    <a class=\"project-control-prev\" role=\"button\">\r\n        <span class=\"project-control-prev-icon glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"project-control-next\" role=\"button\">\r\n        <span class=\"project-control-next-icon glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.carousel_images : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.raw_content : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <!-- End Main Content -->\r\n\r\n    <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <h3>Role</h3>\r\n        <p>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.roles : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </p>\r\n        <h3>Technologies</h3>\r\n        <p>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.technologies : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </p>\r\n        <h3>Duration</h3>\r\n        <p>"
    + alias3(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.download_link : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <h3>Overview</h3>\r\n        "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n        <h3>Commentary</h3>\r\n        "
    + ((stack1 = ((helper = (helper = helpers.commentary || (depth0 != null ? depth0.commentary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"commentary","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});
}());