(function(app){
	'use strict';
	app.directive('iCKonTrash', function($compile){ return { restrict: 'A', templateUrl: 'trash.svg' }; });
})(angular.module('ickons'));
