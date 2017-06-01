(function(app) {
    'use strict';
    app.directive('iCKonTarget', function($compile) { return { restrict: 'A', templateUrl: 'target.svg' }; });
})(angular.module('ickons'));