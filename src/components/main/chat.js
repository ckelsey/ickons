(function(app) {
    'use strict';
    app.directive('iCKonChat', function($compile) { return { restrict: 'A', templateUrl: 'chat.svg' }; });
    app.directive('iCKonChatOutline', function($compile) { return { restrict: 'A', templateUrl: 'chat-outline.svg' }; });
})(angular.module('ickons'));