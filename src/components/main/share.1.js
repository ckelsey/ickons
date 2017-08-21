(function(app) {
    'use strict';
    app.directive('iCKonBank', function ($compile) { return { restrict: 'A', templateUrl: 'bank.svg' }; });
    app.directive('iCKonCreditCard', function ($compile) { return { restrict: 'A', templateUrl: 'credit-card.svg' }; });
    app.directive('iCKonBasket', function ($compile) { return { restrict: 'A', templateUrl: 'basket.svg' }; });
    app.directive('iCKonBuilding', function ($compile) { return { restrict: 'A', templateUrl: 'building.svg' }; });
    app.directive('iCKonCar', function ($compile) { return { restrict: 'A', templateUrl: 'car.svg' }; });
    app.directive('iCKonPlane', function ($compile) { return { restrict: 'A', templateUrl: 'plane.svg' }; });
    app.directive('iCKonCogs', function ($compile) { return { restrict: 'A', templateUrl: 'cogs.svg' }; });
})(angular.module('ickons'));