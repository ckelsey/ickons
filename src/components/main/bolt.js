(function(app){
	'use strict';
	app.directive('iCKonBolt', function($compile){ return { restrict: 'A', templateUrl: 'bolt.svg' }; });
})(angular.module('ickons'));
