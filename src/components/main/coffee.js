(function(app){
	'use strict';
	app.directive('iCKonCoffee', function($compile){ return { restrict: 'A', templateUrl: 'coffee.svg' }; });
})(angular.module('ickons'));
