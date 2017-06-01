(function(app) {
    'use strict';
    app.directive('iCKonImage', function($compile) { return { restrict: 'A', templateUrl: 'image.svg' }; });
    app.directive('iCKonImageOutline', function($compile) { return { restrict: 'A', templateUrl: 'image-outline.svg' }; });
})(angular.module('ickons'));