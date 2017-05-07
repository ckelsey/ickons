(function(app) {
    'use strict';
    app.directive('iCKonFullscreen', function($compile) { return { restrict: 'A', templateUrl: 'fullscreen.svg' }; });
})(angular.module('ickons'));