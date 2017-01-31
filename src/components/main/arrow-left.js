(function(app){
	'use strict';
	app.directive('iCKonArrowLeft', function($compile){ return { restrict: 'A', templateUrl: 'arrow-left.svg' }; });
})(angular.module('ickons'));
