/**
 * This is a page model for the Wiki example application (in progress)
 */

var Model = require("model").Model,
	PageStore = require("perstore/store/filesystem").FileSystem,
	auth = require("pintura/jsgi/auth");
//	Notifying = require("perstore/store/notifying").Notifying,

// Pintura consists of three primary layers: the store, the class (which acts as the 
// model), and the facet. Here we define the store and create the class for the store
// First we create the store for interacting directly with the storage endpoint 
var pageStore = PageStore("Page", {defaultExtension: "rst"});

// now we create a class, all central model logic is defined here 
exports.Page = Model("Page", pageStore, {
	properties: { // schema definitions for property types (these are optional)
		status: {
			type: "string",
			indexed: true
		},
		content: {type: "string"}
	},

	get: function(id, metadata){
		return pageStore.get(id, metadata);
	},
	// this is flag to indicate that if Perstore should check to see an object exists when a PUT occurs, and call construct if it doesn't. The default is false	
	// noConstructPut: false,
});


// The facets for accessing the page class are defined in facet/page
