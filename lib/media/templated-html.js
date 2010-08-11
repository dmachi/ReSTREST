/**
* Media handler for generating HTML from Wiki markup-based doc
*/

var Media = require("media").Media,
	cjsTemplate = require("cjsTemplate"),
	templateStore = require("perstore/store/Template").Template({dataFolder: "templates"}),
	resolveTemplateId = require("perstore/store/Template").resolveTemplateId,
	transform = require("perstore/html-transform"),
	Response=require("pintura/jsgi/response").Response;
	
Media({
	mediaType:"text/html",
	defaultQuality: .1,
	getQuality: function(object){

		if (!object) {return 1; }

		var contentType = object.getMetadata? object.getMetadata()['content-type'] : object['content-type'];

		if (contentType) {

			// html is being requested, we're ideal
			if (contentType=="text/html") { return 1; }

			// we have an available transformer
			if (transform && transform[contentType]) { 
				return 1;
			}else{// no available transformer, but we still want to be the default
				return this.defaultQuality
			}
		}

		//we want to be the default handler if there isn't a specific handler for a request already
		return this.defaultQuality
	},

	serialize: function(object, mediaParams, request, response){
		var template,content;
		
		var meta = object.getMetadata ? object.getMetadata() : {};
		
		var templateId = mediaParams.template || meta['scriptName'] + meta['pathInfo'] || request['scriptName'] + request['pathInfo'];
		templateId = mediaParams.templateType ? templateId + "-" + mediaParams['templateType'] : templateId;

		print("templateId: " + templateId);	

		if (!object){
			response.status = 404;
		}else if ((!response.status || (response.status < 400)) && transform && meta['content-type']){
			try {
				if (transform[meta['content-type']]){
					object = transform[meta['content-type']](object);
				}
			}catch(err){
				print("error transforming content");
				response.status=500;
			}
		}
	
	
		if (response.status > 400) {
			template = templateStore.get("/error/"+response.status);	
			rendered = template.render(response);
		}else{
			templateId = resolveTemplateId(templateId);
			print("resolvedTempalteId: " + templateId);
			template = templateStore.get(templateId);
			print("template: " + template);
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
