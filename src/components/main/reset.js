(function(app){
	'use strict';
	app.directive('iCKonReset', function($compile){ return { restrict: 'A', templateUrl: 'reset.svg' }; });
})(angular.module('ickons'));
