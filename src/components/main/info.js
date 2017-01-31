(function(app){
	'use strict';
	app.directive('iCKonInfo', function($compile){ return { restrict: 'A', templateUrl: 'info.svg' }; });
})(angular.module('ickons'));
