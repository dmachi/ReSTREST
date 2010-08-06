/**
* Media handler for generating HTML from Wiki markup-based doc
*/

var Media = require("media").Media,
	cjsTemplate = require("cjsTemplate"),
	templateStore = require("perstore/store/Template").Template({dataFolder: "templates"}),
	fs = require("file"),
	Response=require("pintura/jsgi/response").Response;

Media({
	mediaType:"text/html",
	getQuality: function(object){
		return 1;
	},
	serialize: function(object, request, response){
		var action,template,content,render;
		print("response.status: " + response.status);

		if(!object || response.status === 404){
			return ["404 - File Not Found"];
			//action = "create";
			//object={id: request.pathInfo};
		}


		// if we aren't specifically requesting "text/html" (eg */*) and the object comes with a content-type, use
		// this object to build the response, otherwise send it through the template system.
		if ((request.headers && (request.headers['accept']!="text/html")) && object['content-type']&&object['content-type']){
			response.headers['content-type'] = object['content-type'];
	
			if (object['content-disposition']){
				response.headers['content-disposition']=object['content-disposition'];
			}	

			if (object['content-length']){
				response.headers['content-length']=object['content-length'];
			}	

			return object;
		}

		if (response.status > 400) {
			template = templateStore.get("/error/"+response.status);	
			rendered = template.render(response);
		}else{
			template = templateStore.get(request.scriptName + request.pathInfo);
			rendered = template.render(object);
		}

		
		response.headers['content-length'] = rendered.length+2;  // this doesn't seem correct, but without the +2 it doesn't get everything.
		response.headers['content-type']="text/html";

		return {
			forEach:function(write){
					write(rendered);
			}
		};
	}
});
