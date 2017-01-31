(function(app){
	'use strict';
	app.directive('iCKonPpt', function($compile){ return { restrict: 'A', templateUrl: 'ppt.svg' }; });
})(angular.module('ickons'));
