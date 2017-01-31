(function(app){
	'use strict';
	app.directive('iCKonImage', function($compile){ return { restrict: 'A', templateUrl: 'image.svg' }; });
})(angular.module('ickons'));
