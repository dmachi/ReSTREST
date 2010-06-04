/**
 * These are the doc facets for the Wiki example application (in progress)
 */

var Doc = require("model/doc").Doc,
	Permissive = require("facet").Permissive,
	Restrictive = require("facet").Restrictive;


// These are the different facets that are available for accessing this data
// This facet uses the Restrictive constructor, so any modifying action must be explicilty
// be enabled (by defining a handler) 
exports.PublicFacet = Restrictive(Doc, {
	prototype: {
		get: function(request){
			print("PublicFacet get()", request, request.store);	
		}
	},
	quality:0.5
	
});

// This facet has for authenticated users and grants read and write capabilities
exports.UserFacet = Permissive(Doc, {
	properties: {
	},
	quality: 1
});

// This facet is for administrators and grants full access to data
exports.AdminFacet = Permissive(Doc, {
	properties: {
	},
	quality: 1
});
