(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['mobileProject'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"project-title\">\r\n                    <h3>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n                </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "<br>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "            <div class=\"download-link text-center\">\r\n                <a href=\""
    + alias3(((helper = (helper = helpers.download_link || (depth0 != null ? depth0.download_link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"download_link","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <div class=\"interact-button download-button text-center\">\r\n                        Download Game\r\n                    </div>\r\n                </a>\r\n                <span class=\"controller-warning\">"
    + alias3(((helper = (helper = helpers.controller_warning || (depth0 != null ? depth0.controller_warning : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"controller_warning","hash":{},"data":data}) : helper)))
    + "\r\n            </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"full-width col-md-6\">\r\n                    <img src="
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ">\r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"project\" data-name=\""
    + alias3(((helper = (helper = helpers.project_name || (depth0 != null ? depth0.project_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"project_name","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"project-header\">\r\n        <div class=\"header-image\">\r\n            <img width=100% src=\""
    + alias3(((helper = (helper = helpers.header_image || (depth0 != null ? depth0.header_image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header_image","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <h3>Role</h3>\r\n            <p>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.roles : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </p>\r\n            <h3>Technologies</h3>\r\n            <p>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.technologies : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </p>\r\n            <h3>Duration</h3>\r\n            <p>"
    + alias3(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.download_link : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <h3>Overview</h3>\r\n            "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            <h3>Commentary</h3>\r\n            "
    + ((stack1 = ((helper = (helper = helpers.commentary || (depth0 != null ? depth0.commentary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"commentary","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n        <div class=\"mobile-images\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>";
},"useData":true});

templates['project'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
}());