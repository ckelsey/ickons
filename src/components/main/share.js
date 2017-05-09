(function(app) {
    'use strict';
    app.directive('iCKonShare', function($compile) { return { restrict: 'A', templateUrl: 'share.svg' }; });
})(angular.module('ickons'));