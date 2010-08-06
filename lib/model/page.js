/**
 * This is a page model for the Wiki example application (in progress)
 */

var Model = require("model").Model,
	PageStore = require("perstore/store/text").Text,
	auth = require("pintura/jsgi/auth");
//	Notifying = require("perstore/store/notifying").Notifying,

// Pintura consists of three primary layers: the store, the class (which acts as the 
// model), and the facet. Here we define the store and create the class for the store
// First we create the store for interacting directly with the storage endpoint 
var pageStore = PageStore({defaultExtension: "rst", dataFolder: "Page", enablePassThrough: true});

// now we create a class, all central model logic is defined here 
exports.Page = Model(pageStore, {
	properties: {} // schema definitions for property types (these are optional)
});


