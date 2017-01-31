(function(app){
	'use strict';
	app.directive('iCKonElement', function($compile){ return { restrict: 'A', templateUrl: 'element.svg' }; });
})(angular.module('ickons'));
