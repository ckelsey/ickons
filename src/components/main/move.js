(function(app){
	'use strict';
	app.directive('iCKonMove', function($compile){ return { restrict: 'A', templateUrl: 'move.svg' }; });
})(angular.module('ickons'));
