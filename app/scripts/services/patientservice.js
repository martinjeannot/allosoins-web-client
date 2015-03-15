'use strict';

/**
 * @ngdoc service
 * @name allosoinsWebClientApp.patientService
 * @description
 * # patientService
 * Factory in the allosoinsWebClientApp.
 */
angular.module('allosoinsWebClientApp')
  .factory('patientService', function () {
    var patient = {
      _id: '507f1f77bcf86cd799439014',
      firstName: 'Emmanuel',
      lastName: 'BIGO',
      address: '82 rue Norbert Segard, 75015 PARIS',
      phoneNumber: '06 08 95 43 66',
      birthDate: '1976-03-12T11:31:29.395Z'
    };

    return {
      getPatientById: function (id) {
        return patient;
      }
    };
  });
