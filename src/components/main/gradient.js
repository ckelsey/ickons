(function(app) {
    'use strict';
    app.directive('iCKonGradient', function($compile) { return { restrict: 'A', templateUrl: 'gradient.svg' }; });
})(angular.module('ickons'));