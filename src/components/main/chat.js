(function(app) {
    'use strict';
    app.directive('iCKonChat', function($compile) { return { restrict: 'A', templateUrl: 'chat.svg' }; });
})(angular.module('ickons'));