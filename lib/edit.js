require("json");
var docName = location.search.match(/doc=([^&]+)/);
docName = docName && docName[1];
document.title = "Editing " + docName;
var request = require("commonjs-utils/jsgi-client").request;
document.getElementById("main-header").innerHTML = escapeHTML("Editing " + docName);
request({
	uri: "Doc/" + docName,
	headers: {
		"accept": "application/javascript, application/json"
	}
}).then(function(response){
	if(!response.headers.username){
		login();
	}
	var doc = eval("(" + response.body.join("") + ")");
	if(typeof doc !== "object"){
		doc = {
			id: docName,
			content: ""
		};
	}
	var contentArea = document.getElementById("content-area");
	contentArea.value = doc.content;

	document.getElementById("save-button").onclick = function(){
		doc.content = contentArea.value;
		request({
			uri: "/Doc/" + docName,
			method: "PUT",
			body: JSON.stringify(doc),
			headers: {
				"accept": "application/javascript, application/json",
				"content-type": "application/json"
			}
		}).then(function(){
			// redirect to the doc once it is saved
			location = "/Doc/" + docName;
		}, errorHandler);
	};

}, errorHandler);

function login(){
	document.getElementById("login-form").style.display="block";
	document.getElementById("sign-in").onclick = function(){
		userRpc("authenticate").then(function(){
			document.getElementById("login-form").style.display="none";
			alert("Logged in");
		}, errorHandler);
	};
	document.getElementById("register").onclick = function(){
		userRpc("createUser").then(function(){
			alert("Registered");
		}, errorHandler);
	};
}

function userRpc(method, params){
	return request({
		uri: "Class/User",
		method: "POST",
		body: JSON.stringify({
			id:"call-id",
			method: method,
			params: [
				document.getElementById("user").value,
				document.getElementById("password").value
			]
		}),
		headers: {
			"accept": "application/javascript, application/json",
			"content-type": "application/json"
		}
	}).then(function(response){
		response = eval('(' + response.body.join("") + ')');
		if(response.error){
			throw response.error;
		}
		return response.result;
	});
	}

function errorHandler(error){
	alert(error);
}


function escapeHTML(html){
	return html.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;");
}
