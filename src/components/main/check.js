(function(app){
	'use strict';
	app.directive('iCKonCheck', function($compile){ return { restrict: 'A', templateUrl: 'check.svg' }; });
})(angular.module('ickons'));
