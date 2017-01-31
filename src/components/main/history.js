(function(app){
	'use strict';
	app.directive('iCKonHistory', function($compile){ return { restrict: 'A', templateUrl: 'history.svg' }; });
})(angular.module('ickons'));
