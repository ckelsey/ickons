(function(app) {
    'use strict';
    app.directive('iCKonThreeSixty', function($compile) { return { restrict: 'A', templateUrl: '360.svg' }; });
    app.directive('iCKonThreeSixtyNvidia', function($compile) { return { restrict: 'A', templateUrl: '360_2.svg' }; });
})(angular.module('ickons'));