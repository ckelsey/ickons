(function(app){
	'use strict';
	app.directive('iCKonFile', function($compile){ return { restrict: 'A', templateUrl: 'file.svg' }; });
})(angular.module('ickons'));
