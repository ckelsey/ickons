(function(app) {
    'use strict';
    app.directive('iCKonHome', function($compile) { return { restrict: 'A', templateUrl: 'home.svg' }; });
})(angular.module('ickons'));