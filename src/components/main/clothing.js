(function(app) {
    'use strict';
    app.directive('iCKonClothing', function($compile) { return { restrict: 'A', templateUrl: 'clothing.svg' }; });
})(angular.module('ickons'));