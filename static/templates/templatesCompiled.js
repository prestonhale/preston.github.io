(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['mobileProject'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"project-title\">\r\n                        <h3>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n                    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "            <!-- Carousel -->\r\n            <div id=\"project-carousel-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"project-carousel carousel slide\" data-ride=\"carousel\">\r\n                <!-- Indicators -->\r\n                <ol class=\"carousel-indicators\">\r\n                    "
    + alias3((helpers["carousel-li"] || (depth0 && depth0["carousel-li"]) || alias1).call(depth0,0,true,{"name":"carousel-li","hash":{},"data":data}))
    + "\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ol>\r\n                \r\n                <!-- Wrapper for slides -->\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"carousel-item item\">\r\n                        <img width=900 height=500 src=\""
    + alias3(((helper = (helper = helpers.header_image || (depth0 != null ? depth0.header_image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header_image","hash":{},"data":data}) : helper)))
    + "\">\r\n                    </div>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\r\n                \r\n                <!-- Left and right controls -->\r\n                <a class=\"left carousel-control carousel-control-prev\" href=\"#project-carousel-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-slide=\"prev\">\r\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n                <a class=\"right carousel-control carousel-control-next\" href=\"#project-carousel-"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-slide=\"next\">\r\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                </a>\r\n            </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                        "
    + container.escapeExpression((helpers["carousel-li"] || (depth0 && depth0["carousel-li"]) || helpers.helperMissing).call(depth0,(data && data.index),false,{"name":"carousel-li","hash":{},"data":data}))
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"carousel-item item\">\r\n                            <img width=900 height=500 src=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\">\r\n                        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <!-- Raw Content TODO: Make scrolltown invisible on mobile-->\r\n        <!-- "
    + ((stack1 = ((helper = (helper = helpers.raw_content || (depth0 != null ? depth0.raw_content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"raw_content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " -->\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "                "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "<br>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "            <div class=\"download-link text-center\">\r\n                <a href=\""
    + alias3(((helper = (helper = helpers.download_link || (depth0 != null ? depth0.download_link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"download_link","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <div class=\"interact-button download-button text-center\">\r\n                        Download Game\r\n                    </div>\r\n                </a>\r\n                <span class=\"controller-warning\">"
    + alias3(((helper = (helper = helpers.controller_warning || (depth0 != null ? depth0.controller_warning : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"controller_warning","hash":{},"data":data}) : helper)))
    + "\r\n            </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"mobile-image col-md-6\">\r\n                        <img src="
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ">\r\n                    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"project\" data-name=\""
    + alias3(((helper = (helper = helpers.project_name || (depth0 != null ? depth0.project_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"project_name","hash":{},"data":data}) : helper)))
    + "\">\r\n    <!-- SMALL SCREEN -->\r\n        <div class=\"mobile-project-header\">\r\n            <div class=\"header-image\">\r\n                <img width=100% src=\""
    + alias3(((helper = (helper = helpers.header_image || (depth0 != null ? depth0.header_image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header_image","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n\r\n    <!-- LARGE SCREEN -->\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.images : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.raw_content : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"project-text row\">\r\n        <div class=\"project-details col-md-3\">\r\n            <h3>Role</h3>\r\n            <p>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.roles : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </p>\r\n            <h3>Technologies</h3>\r\n            <p>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.technologies : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </p>\r\n            <h3>Duration</h3>\r\n            <p>"
    + alias3(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.download_link : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <h3>Overview</h3>\r\n            "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            <h3>Commentary</h3>\r\n            "
    + ((stack1 = ((helper = (helper = helpers.commentary || (depth0 != null ? depth0.commentary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"commentary","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n        <!-- SMALL SCREEN -->\r\n            <div class=\"mobile-image-holder\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n            <a href=\"#projects\">\r\n                <div class=\"mobile-next-project-button row\">\r\n                    <div class=\"next-project-button\">\r\n                            Next Project <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n    </div>\r\n</div>";
},"useData":true});

templates['project'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
}());