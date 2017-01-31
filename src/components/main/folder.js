(function(app){
	'use strict';
	app.directive('iCKonFolder', function($compile){ return { restrict: 'A', templateUrl: 'folder.svg' }; });
})(angular.module('ickons'));
