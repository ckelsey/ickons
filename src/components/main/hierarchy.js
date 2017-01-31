(function(app){
	'use strict';
	app.directive('iCKonHierarchy', function($compile){ return { restrict: 'A', templateUrl: 'hierarchy.svg' }; });
})(angular.module('ickons'));
