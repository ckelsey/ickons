(function(app) {
    'use strict';
    app.directive('iCKonLoupe', function($compile) { return { restrict: 'A', templateUrl: 'loupe.svg' }; });
})(angular.module('ickons'));