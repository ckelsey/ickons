import angular from "angular"
import template from "./main.html"

angular.module("app", [
	"ngRoute",
	"ickons"
])
	.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				template: template
			})
			.otherwise({
				redirectTo: "/"
			});
	})
	.controller("AppCtlr", function () {
		var self = this;
		self.fillColor = "#257298";
	});


