(function(app) {
    'use strict';
    app.directive('iCKonChart', function($compile) { return { restrict: 'A', templateUrl: 'chart.svg' }; });
})(angular.module('ickons'));