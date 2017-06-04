(function(app) {
    'use strict';
    app.directive('iCKonBookmark', function($compile) { return { restrict: 'A', templateUrl: 'bookmark.svg' }; });
})(angular.module('ickons'));