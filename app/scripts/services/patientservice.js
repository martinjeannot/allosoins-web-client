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
      birthDate: new Date(1976, 3, 12),
      email: 'emmanuel.bigo@gmail.com'
    };

    return {
      getPatientById: function (id) {
        if (id) {
          return patient;
        }
      }
    };
  });
