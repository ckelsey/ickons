(function(app){
	'use strict';
	app.directive('iCKonAudio', function($compile){ return { restrict: 'A', templateUrl: 'audio.svg' }; });
})(angular.module('ickons'));
