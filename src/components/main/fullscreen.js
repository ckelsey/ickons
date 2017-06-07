(function(app) {
    'use strict';
    app.directive('iCKonFullscreen', function($compile) { return { restrict: 'A', templateUrl: 'fullscreen.svg' }; });
    app.directive('iCKonFullscreen2', function($compile) { return { restrict: 'A', templateUrl: 'fullscreen-2.svg' }; });
})(angular.module('ickons'));