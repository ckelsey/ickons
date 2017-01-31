(function(app){
	'use strict';
	app.directive('iCKonLink', function($compile){ return { restrict: 'A', templateUrl: 'link.svg' }; });
})(angular.module('ickons'));
