/**
* Media handler for generating HTML from Wiki markup-based doc
*/

var Media = require("media").Media,
	cjsTemplate = require("cjsTemplate"),
	templateStore = require("perstore/store/filesystem").FileSystem("", {dataFolder: "templates"}),
	fs = require("file");

Media({
	mediaType:"text/html",
	getQuality: function(object){
		return 1;
	},
	serialize: function(object, request, response){
		var action,template,content;
		print("response.status: " + response.status);

		if(response.status === 404){
			action = "create";
			object={id: request.pathInfo};
		}


		var templateParts = (request.scriptName + request.pathInfo).substr(1).split("/");
		var template;
		while(!template && templateParts.length>0){
			var templateId = templateParts.join("/") + (request.subContentType?"-"+request.subContentType:"");	
			print("lookingFor template: " + templateId);
			var template = 	templateStore.get(templateId);
			if(!template){templateParts.pop()}
		}

		if (!template){
			var template = templateStore.get("dtkChrome.html");
		}

		if (!template){
			var template = "{{id}}";
		}

		return {
			forEach:function(write){
					write(cjsTemplate.renderTemplate(template.content, object));
			}
		};
	}
});
