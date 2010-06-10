/**
* Media handler for generating HTML from Wiki markup-based doc
*/

var Media = require("media").Media,
	rstToHtml = require("markdown").toHTML,
	escapeHTML = require("narwhal/html").escape,
	Template = require("cjsTemplate").Template,
	fs = require("file");
Media({
	mediaType:"text/html",
	getQuality: function(object){
		return 1;
	},
	serialize: function(object, request, response){
		var docName = request.pathInfo;
		var action;
		if(response.status === 404){
			action = "create";
			object = "This doc does not exist yet" + 
				// make sure it shows up on browsers that alternately show "friendly 404's for small responses
				"                                                                                                                                                                                                                                                                                                            ";
		}else if(response.status === 200){
			action = "edit";
		}


		return {
			forEach:function(write){
				var templateString = fs.read("templates/dtkChrome.html");
				var template = Template(templateString);
				write(template.process(object));							
			}
		};
	}
});


