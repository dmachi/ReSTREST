/**
 * This class is used for tracking all the changes of a doc
 */

var Model = require("model").Model,
	DefaultStore = require("perstore/stores").DefaultStore,
	auth = require("pintura/jsgi/auth");

// This class contains  
var docChangeStore = DefaultStore("DocChange");
/* We can switch to the SQL based back-end with: 
docChangeStore = SQLStore({
	table: "DocChange",
	idColumn: "id"
	indexedProperties:{
		id: true,
		docId: true
	}
});
*/

// now we create a class, all central model logic is defined here 
exports.DocChange = Model("DocChange", docChangeStore, {
	properties: {
		content: String,
		docId: {
			description:"This is the id for the current doc from the Doc model"
		}
	},
	links:[
		{
			rel: "current",
			href: "../Doc/{docId}"
		}
	]
});

// The facets for accessing the doc class are defined in facet/doc
