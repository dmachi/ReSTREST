/**
 * This is an example Wiki web application written on Pintura
 */
/*
var pageFacets = require("./facet/page"),
	pageChangeFacets = require("./facet/page-change"),
	admins = require("commonjs-utils/settings").security.admins,
	fullModel = require("./model/index").DataModel,
	copy = require("commonjs-utils/copy").copy,
	Restrictive = require("perstore/facet").Restrictive,
	User = require("pintura/pintura").config.security.getAuthenticationFacet();
*/

var pageFacets = require("./facet/page"),
	//pageChangeFacets = require("./facet/page-change"),
	admins = require("commonjs-utils/settings").security.admins,
	copy = require("commonjs-utils/copy").copy,
	Restrictive = require("perstore/facet").Restrictive,
	FileSystem = require("perstore/store/filesystem").FileSystem,
	File = require("pintura/media").getFileModel(),
	Model = require("perstore/model").Model,
	Notifying = require("perstore/store/notifying").Notifying,
	User = require("pintura/pintura").config.security.getAuthenticationFacet();


// registers the HTML representation handler that generates HTML from wiki content
require("media/templated-html");

// Defines the data model for the given user by request
exports.getDataModel = function(request){
	var user = request.remoteUser;
	if(user){
		if(admins.indexOf(user)>-1){
			return fullModel; // admin users can directly access the data model without facets
		}
		return userModel;
	}
	return publicModel;
}

var ClassModel = Model(Notifying(require("perstore/stores").DefaultStore()),{});
var fullModel = {
        Page: require("./model/page").Page,
	//PageChange: require("./model/page-change").PageChange,
	User: User,
	File: File,
	Class: ClassModel,
	Module: FileSystem({dataFolder:"../lib"})
};
// initialize the data model
// require("perstore/model").initializeRoot(fullModel);
//
// initialize the data model
require("perstore/model").initializeRoot(fullModel);
fullModel = require("perstore/model").createModelsFromModel(ClassModel, fullModel);

// the data model for non-authenticated users
var publicModel = {
	Page: pageFacets.PublicFacet,
	//PageChange: pageChangeFacets.PublicFacet,
	User: User,
	Class: Restrictive(fullModel.Class)
};

// the data model for non-authenticated users
 var publicModel = {
	Page: pageFacets.PublicFacet,                                                                                                         
	//PageChange: pageChangeFacets.PublicFacet,
	User: User,
	File: Restrictive(File),
	Class: Restrictive(ClassModel)
};

// the data model for authenticated users 
var userModel = copy(publicModel, {});
userModel.Page = pageFacets.UserFacet

//this is just a global variable defined for this application 
//to verify access in the template
global.baseUrl = "/";

