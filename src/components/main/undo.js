(function(app){
	'use strict';
	app.directive('iCKonUndo', function($compile){ return { restrict: 'A', templateUrl: 'undo.svg' }; });
})(angular.module('ickons'));
