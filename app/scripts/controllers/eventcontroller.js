'use strict';

/**
 * @ngdoc function
 * @name allosoinsWebClientApp.controller:EventController
 * @description
 * # EventController
 * Controller of the allosoinsWebClientApp
 */
angular.module('allosoinsWebClientApp')
  .controller('EventController', function ($scope, patientService) {
    $scope.event = $scope.ngDialogData;
    $scope.patient = patientService.getPatientById($scope.event.patientId);
  });
