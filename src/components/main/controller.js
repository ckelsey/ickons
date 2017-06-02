(function(app) {
    'use strict';
    app.directive('iCKonController', function($compile) { return { restrict: 'A', templateUrl: 'controller.svg' }; });
})(angular.module('ickons'));