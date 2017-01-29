(function(app) {
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "main.html"
		})
		.otherwise({
			redirectTo: '/'
		});
	}])
	.controller('AppCtlr', function($scope, $timeout) {
		var self = this;
		self.fillColor = '#257298';
	});

})(angular.module('app', [
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ickons'
]));
