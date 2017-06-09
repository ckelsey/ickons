(function(app) {
    'use strict';
    app.directive('iCKonVr', function($compile) { return { restrict: 'A', templateUrl: 'vr.svg' }; });
    app.directive('iCKonBinoculars', function($compile) { return { restrict: 'A', templateUrl: 'binoculars.svg' }; });
})(angular.module('ickons'));