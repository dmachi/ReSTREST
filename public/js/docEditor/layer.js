dojo.provide("docEditor.layer");
dojo.require("dijit.Dialog");
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.form.Button");

var dialogLauncher = function(doc){
		docEditor.doc = doc;
		docEditor.content.set("content", "<div><textarea id='editContentArea' style='width:750px;height:400px;'>" + doc.content + "</textarea></div>");
		var container = document.createElement("div");
		var cancelButton = new dijit.form.Button({type:"cancel", label: "Cancel"});
		dojo.connect(cancelButton, "onClick", function(){
			dojo.byId("editContentArea").value = docEditor.doc.content;
			docEditor.dialog.hide();
		})
		container.appendChild(cancelButton.domNode);
		var saveButton = new dijit.form.Button({type:"submit", label: "Save"});
		dojo.connect(saveButton, "onClick", function(){
			dojo.xhr("put", {
				url: window.location,
				headers: {
					'Accept': "text/html",
					'Content-Type': 'application/json'
				},
				postData: dojo.toJson(dojo.mixin(docEditor.doc, {id: window.location.pathName, content: dojo.byId("editContentArea").value})),
				load: function(results){
					console.log("Saved Page",results);
					dojo.byId("rstContent").innerHTML=results;
				},
				error: function(err){
					console.log("Error Saving Page: ",err);
					docEditor.dialog.show()
				}
			});		
			docEditor.dialog.hide();
		})
		container.appendChild(saveButton.domNode);
		docEditor.content.containerNode.appendChild(container);
		docEditor.dialog._position();
}

docEditor.editDoc = function(params){
		console.log("Edit Doc");

		if (!docEditor.dialog){
			docEditor.content = new dijit.layout.ContentPane({});
			docEditor.content.set("content", "<h1>Loading...</h1>");
			docEditor.dialog = new dijit.Dialog({content: docEditor.content, title: "Documentation Editor - " + document.title});
			var def = dojo.xhrGet({
				url: window.location,
				headers: {
					'Accept': 'application/json'
				},
				handleAs: 'json'
			});
			def.addErrback(function(err){
				console.log("Caught error in xhr callback: " + err);
				var doc = {id: window.location.pathName, content: ""};
				dialogLauncher(doc);
			});
			def.addCallback(dialogLauncher);
		}

		docEditor.dialog.show();		
}
