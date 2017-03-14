(function(app) {
    'use strict';
    app.directive('iCKonFood', function($compile) { return { restrict: 'A', templateUrl: 'food.svg' }; });
})(angular.module('ickons'));