(function(app) {
    'use strict';
    app.directive('iCKonDrink', function($compile) { return { restrict: 'A', templateUrl: 'drink.svg' }; });
})(angular.module('ickons'));