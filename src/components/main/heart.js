(function(app) {
    'use strict';
    app.directive('iCKonHeart', function($compile) { return { restrict: 'A', templateUrl: 'heart.svg' }; });
})(angular.module('ickons'));