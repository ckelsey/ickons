(function(app) {
    'use strict';
    app.directive('iCKonShare', function($compile) { return { restrict: 'A', templateUrl: 'share.svg' }; });

    app.directive('iCKonShareOutline', function($compile) { return { restrict: 'A', templateUrl: 'share-outline.svg' }; });
})(angular.module('ickons'));