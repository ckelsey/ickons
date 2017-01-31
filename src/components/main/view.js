(function(app){
	'use strict';
	app.directive('iCKonView', function($compile){ return { restrict: 'A', templateUrl: 'view.svg' }; });
})(angular.module('ickons'));
