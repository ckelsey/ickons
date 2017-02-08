(function(app){
	'use strict';
	app.directive('iCKonAddImage', function($compile){ return { restrict: 'A', templateUrl: 'add-image.svg' }; });
})(angular.module('ickons'));
