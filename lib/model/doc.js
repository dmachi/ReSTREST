/**
 * This is a doc model for the Wiki example application (in progress)
 */
print("app model");
var Model = require("model").Model,
	DefaultStore = require("perstore/store/filesystem").FileSystem,
	auth = require("pintura/jsgi/auth"),
	Notifying = require("pintura/store/notifying").Notifying,
	DocChange = require("./doc-change").DocChange;

// Pintura consists of three primary layers: the store, the class (which acts as the 
// model), and the facet. Here we define the store and create the class for the store
// First we create the store for interacting directly with the storage endpoint 
print("DefaultStore: " + docStore);
var docStore = DefaultStore("Doc");
print("docStore: " + docStore);

/* We can switch to the SQL based back-end with: 
docStore = require("./doc-sql").docStore;
*/


/* To add full-text indexing (only supported in Rhino) 
docStore = require("store/full-text").FullText(docStore, "Doc");
*/

// to add events
docStore = Notifying(docStore, "Doc");

// now we create a class, all central model logic is defined here 
exports.Doc = Model("Doc", docStore, {
/*	We can create handlers for any of the actions, they will go directly to the store otherwise
	query: function(query, options){
		var sqlCondition = this.getWhereClause(query, options);

		if(sqlCondition){
			return docStore.executeQuery(
				"SELECT id, title FROM Doc WHERE " + sqlCondition, options);
		}
	},
*/
/*
	"delete": function(id){
		// any logic that we want on deletes
		// now call the store to actually do the delete
		docStore["delete"](id);
	},
*/

	construct: function(doc, directives){
		// set initial properties on object instantiation
		if(auth.currentUser){
			doc.createdBy = auth.currentUser.username;
		}
		//doc.status = "published";
		//return doc.save(directives);
	},
/*
	put: function(doc, options){ // handle puts to add to history and define attribution
		if(auth.currentUser){
			// set the current user name as the lastModifiedBy property
			doc.lastModifiedBy = auth.currentUser.username;
		}
		doc.status = "published";
		// do the default action of saving to the store
		var docId = docStore.put(doc, options) || doc.id;
		// create a new change entry in the history log
		new DocChange({
			content: doc.content,
			docId: docId
		});
		return docId;
	},
*/	
	properties: { // schema definitions for property types (these are optional)
		status: String,
		content: String
	},

	prototype: { // define the methods available on the model object instances
		// these are used by atom
		getTitle: function(item){
			return item.name;
		},
		getSummary: function(item){
			return item.description;
		},
		getUpdated: function(item){
			return item.uploaded;
		}
		
	},
	links: [ // define the link relations with other objects
		{
			rel: "history", // link to the list of changes for a doc
			href: "../DocChange/?docId={id}"
		}
	
	],

	openObjectStore: function(){
		print("Doc openObjectStore()");
	},

	// this is flag to indicate that if Perstore should check to see an object exists when a PUT occurs, and call construct if it doesn't. The default is false	
	// noConstructPut: false,
});

// The facets for accessing the doc class are defined in facet/doc

