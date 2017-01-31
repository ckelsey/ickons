(function(app){
	'use strict';
	app.directive('iCKonFunction', function($compile){ return { restrict: 'A', templateUrl: 'function.svg' }; });
})(angular.module('ickons'));
