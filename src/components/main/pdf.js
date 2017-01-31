(function(app){
	'use strict';
	app.directive('iCKonPdf', function($compile){ return { restrict: 'A', templateUrl: 'pdf.svg' }; });
})(angular.module('ickons'));
