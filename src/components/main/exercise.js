(function(app) {
    'use strict';
    app.directive('iCKonExercise', function($compile) { return { restrict: 'A', templateUrl: 'exercise.svg' }; });
})(angular.module('ickons'));