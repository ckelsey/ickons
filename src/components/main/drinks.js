(function(app) {
    'use strict';
    app.directive('iCKonDrinks', function($compile) { return { restrict: 'A', templateUrl: 'drinks.svg' }; });
})(angular.module('ickons'));