(function(app){
	'use strict';
	app.directive('iCKonOpen', function($compile){ return { restrict: 'A', templateUrl: 'open.svg' }; });
})(angular.module('ickons'));
