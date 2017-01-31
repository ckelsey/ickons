(function(app){
	'use strict';
	app.directive('iCKonClose', function($compile){ return { restrict: 'A', templateUrl: 'close.svg' }; });
})(angular.module('ickons'));
