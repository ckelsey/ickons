(function(app){
	'use strict';
	app.directive('iCKonVideo', function($compile){ return { restrict: 'A', templateUrl: 'video.svg' }; });
})(angular.module('ickons'));
