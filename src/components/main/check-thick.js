(function(app) {
    'use strict';
    app.directive('iCKonCheckThick', function($compile) { return { restrict: 'A', templateUrl: 'check-thick.svg' }; });
})(angular.module('ickons'));