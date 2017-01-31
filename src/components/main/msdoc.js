(function(app){
	'use strict';
	app.directive('iCKonMsdoc', function($compile){ return { restrict: 'A', templateUrl: 'msdoc.svg' }; });
})(angular.module('ickons'));
