(function(app) {
    'use strict';
    app.directive('iCKonFilter', function($compile) { return { restrict: 'A', templateUrl: 'filter.svg' }; });
})(angular.module('ickons'));