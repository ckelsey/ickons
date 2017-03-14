(function(app) {
    'use strict';
    app.directive('iCKonVial', function($compile) { return { restrict: 'A', templateUrl: 'vial.svg' }; });
})(angular.module('ickons'));