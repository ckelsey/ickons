(function(app) {
    'use strict';
    app.directive('iCKonHorn', function($compile) { return { restrict: 'A', templateUrl: 'horn.svg' }; });
})(angular.module('ickons'));