(function(app) {
    'use strict';
    app.directive('iCKonVr', function($compile) { return { restrict: 'A', templateUrl: 'vr.svg' }; });
    app.directive('iCKonVrNvidia', function($compile) { return { restrict: 'A', templateUrl: 'vr_nvidia.svg' }; });
    app.directive('iCKonBinoculars', function($compile) { return { restrict: 'A', templateUrl: 'binoculars.svg' }; });
})(angular.module('ickons'));