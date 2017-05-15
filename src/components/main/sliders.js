(function(app) {
    'use strict';
    app.directive('iCKonSliders', function($compile) { return { restrict: 'A', templateUrl: 'sliders.svg' }; });
})(angular.module('ickons'));