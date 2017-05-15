(function(app) {
    'use strict';
    app.directive('iCKonLayers', function($compile) { return { restrict: 'A', templateUrl: 'layers.svg' }; });
})(angular.module('ickons'));