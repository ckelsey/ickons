(function(app){
	'use strict';
	app.directive('iCKonNew', function($compile){ return { restrict: 'A', templateUrl: 'new.svg' }; });
})(angular.module('ickons'));
