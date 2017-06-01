(function(app) {
    'use strict';
    app.directive('iCKonTrophy', function($compile) { return { restrict: 'A', templateUrl: 'trophy.svg' }; });
})(angular.module('ickons'));