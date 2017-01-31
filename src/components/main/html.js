(function(app){
	'use strict';
	app.directive('iCKonHtml', function($compile){ return { restrict: 'A', templateUrl: 'html.svg' }; });
})(angular.module('ickons'));
