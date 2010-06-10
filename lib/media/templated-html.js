/**
* Media handler for generating HTML from Wiki markup-based doc
*/

var Media = require("media").Media,
	cjsTemplate = require("cjsTemplate"),
	fs = require("file");

Media({
	mediaType:"text/html",
	getQuality: function(object){
		return 1;
	},
	serialize: function(object, request, response){
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
				write(cjsTemplate.renderTemplate(templateString,object));
			}
		};
	}
});

Media({
	mediaType:"text/rst",
	getQuality: function(object){
		return 1;
	},
	serialize: function(object, request, response){
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
			"Content-Type": "text/rst",
			forEach:function(write){
				write(fs.read("templates/dtkChrome.html"));
			}
		};
	}
});




