(function(app){
	'use strict';
	app.directive('iCKonEyedropper', function($compile){ return { restrict: 'A', templateUrl: 'eyedropper.svg' }; });
})(angular.module('ickons'));
