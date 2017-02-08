(function(app){
	'use strict';
	app.directive('iCKonScale', function($compile){ return { restrict: 'A', templateUrl: 'scale.svg' }; });
})(angular.module('ickons'));
