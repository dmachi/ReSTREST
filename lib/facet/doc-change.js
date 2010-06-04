/**
 * These are the doc facets for the Wiki example application (in progress)
 */

var DocChange = require("model/doc-change").DocChange,
	Permissive = require("facet").Permissive,
	Restrictive = require("facet").Restrictive;


// These are the different facets that are available for accessing this data
// This facet uses the Restrictive constructor, so any modifying action must be explicilty
// be enabled (by defining a handler) 
exports.PublicFacet = Restrictive(DocChange, {
	prototype: {
	},
	quality:0.5
	
});
// note that general users can't change doc history

// This facet is for administrators and grants full access to data
exports.AdminFacet = Permissive(DocChange, {
	properties: {
	},
	quality: 1
});
