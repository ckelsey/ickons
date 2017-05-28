(function(app) {
    'use strict';
    app.directive('iCKonCloseThin', function($compile) { return { restrict: 'A', templateUrl: 'close-thin.svg' }; });
})(angular.module('ickons'));