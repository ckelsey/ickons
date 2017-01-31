(function(app){
	'use strict';
	app.directive('iCKonCss', function($compile){ return { restrict: 'A', templateUrl: 'css.svg' }; });
})(angular.module('ickons'));
