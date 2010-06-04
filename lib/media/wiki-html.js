/**
* Media handler for generating HTML from Wiki markup-based doc
*/

var Media = require("media").Media,
	rstToHtml = require("markdown").toHTML,
	escapeHTML = require("narwhal/html").escape,
	wikiToHtml = require("wiky/wiky").toHtml;
	
Media({
	mediaType:"text/html",
	getQuality: function(object){
		return 1;
	},
	serialize: function(object, request, response){
		print("object: " + object);
		//var docName = escapeHTML(request.pathInfo.substring(1));
		var docName = request.pathInfo;
		print("docName: " + request.pathInfo);
		var action;
		if(response.status === 404){
			action = "create";
			object = "This doc does not exist yet" + 
				// make sure it shows up on browsers that alternately show "friendly 404's for small responses
				"                                                                                                                                                                                                                                                                                                            ";
		}
		else if(response.status === 200){
			action = "edit";
		}
		return {
			forEach:function(write){
				write('<html><title>' + docName + '</title>\n');
				write('<style type="text/css">@import "/css/common.css";</style>\n');
				write('<body><div id="headerContainer"><span class="docName">' + docName + '<span></div>\n');
				write('<div id="content">\n');
				write(rstToHtml(object.content));
				if(action){
					write('<p><a href="/edit.html?doc=' + docName + '">' + action + ' this doc</a></p>\n');
				}	
				write('</div></body></html>\n');
			}
		};
	}
});

/*
var rules = require("wiky/wiky").rules,
	store = require("wiky/wiky").store;
// add a rule for [[target doc]] style links
rules.wikiinlines.push({ rex:/\[\[([^\]]*)\]\]/g, tmplt:function($0,$1,$2){return store("<a href=\""+$1+"\">"+$1+"</a>");}});
*/
