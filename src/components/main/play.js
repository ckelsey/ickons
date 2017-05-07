(function(app) {
    'use strict';
    app.directive('iCKonPlay', function($compile) { return { restrict: 'A', templateUrl: 'play.svg' }; });
})(angular.module('ickons'));