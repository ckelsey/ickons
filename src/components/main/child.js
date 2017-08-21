(function (app) {
	'use strict';
	app.directive('iCKonChild', function ($compile) { return { restrict: 'A', templateUrl: 'child.svg' }; });
})(angular.module('ickons'));