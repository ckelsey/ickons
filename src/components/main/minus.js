(function(app) {
    'use strict';
    app.directive('iCKonMinus', function($compile) { return { restrict: 'A', templateUrl: 'minus.svg' }; });
})(angular.module('ickons'));