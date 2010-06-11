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
		print("response.status: " + response.status);
		if(response.status === 404){
			action = "create";
			object={id: request.pathInfo};
		}
		return {
			forEach:function(write){
				if (request.headers['x-requested-with']!="XMLHttpRequest"){
					var templateString = fs.read("templates/dtkChrome.html");
					write(cjsTemplate.renderTemplate(templateString,object));
				}else{
					write(require("markdown").toHTML(object.content));	
				}
			}
		};
	}
});
