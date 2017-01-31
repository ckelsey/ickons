(function(app){
	'use strict';
	app.directive('iCKonEdit', function($compile){ return { restrict: 'A', templateUrl: 'edit.svg' }; });
})(angular.module('ickons'));
