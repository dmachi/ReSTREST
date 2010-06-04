/**
 * Defines the capabilities of different users
 */
var docFacets = require("facet/doc"),
	docChangeFacets = require("facet/doc-change"),
	admins = require("commonjs-utils/settings").admins,
	Register = require("pintura/security").Register,
	FullAccess = require("pintura/security").FullAccess,
	security = require("pintura/pintura").config.security;

print("docFacets: " + docFacets);

security.getAllowedFacets = function(user, request){
	print("getAllowedFacets");
	if(user){
		if(admins.indexOf(user.username)>-1){
			return [FullAccess];
		}
		return [docFacets.UserFacet];
	}

	print("return docFacets.PublicFacet: " + docFacets.PublicFacet);
	return [docFacets.PublicFacet];
};
