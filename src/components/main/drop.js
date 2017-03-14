(function(app) {
    'use strict';
    app.directive('iCKonDrop', function($compile) { return { restrict: 'A', templateUrl: 'drop.svg' }; });
})(angular.module('ickons'));