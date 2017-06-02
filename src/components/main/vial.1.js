(function(app) {
    'use strict';
    app.directive('iCKonUploadOutline', function($compile) { return { restrict: 'A', templateUrl: 'upload-outline.svg' }; });
})(angular.module('ickons'));