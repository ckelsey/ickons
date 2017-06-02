(function(app) {
    'use strict';
    app.directive('iCKonPacman', function($compile) { return { restrict: 'A', templateUrl: 'pacman.svg' }; });
})(angular.module('ickons'));