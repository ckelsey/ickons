(function(app){
	'use strict';
	app.directive('iCKonMediafly', function($compile){ return { restrict: 'A', templateUrl: 'mediafly.svg' }; });
})(angular.module('ickons'));
