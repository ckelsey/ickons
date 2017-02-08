(function(app){
	'use strict';
	app.directive('iCKonReorder', function($compile){ return { restrict: 'A', templateUrl: 'reorder.svg' }; });
})(angular.module('ickons'));
