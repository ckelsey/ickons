(function(app) {
    'use strict';
    app.directive('iCKonHeart', function($compile) { return { restrict: 'A', templateUrl: 'heart.svg' }; });
    app.directive('iCKonHeartOutline', function($compile) { return { restrict: 'A', templateUrl: 'heart-outline.svg' }; });
})(angular.module('ickons'));