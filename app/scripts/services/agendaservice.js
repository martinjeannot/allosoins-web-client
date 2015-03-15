'use strict';

/**
 * @ngdoc service
 * @name allosoinsWebClientApp.agendaService
 * @description
 * # agendaService
 * Factory in the allosoinsWebClientApp.
 */
angular.module('allosoinsWebClientApp')
  .factory('agendaService', function () {
    var events = [
      {
        _id: '507f1f77bcf86cd799439011',
        type: 'office',
        title: 'DURAND Sophie',
        start: '2015-03-12T08:00:00',
        end: '2015-03-12T10:00:00'
      },
      {
        _id: '507f1f77bcf86cd799439012',
        type: 'atHome',
        title: 'DURAND Sophie 2',
        start: '2015-03-09T08:00:00',
        end: '2015-03-09T10:00:00'
      },
      {
        _id: '507f1f77bcf86cd799439013',
        type: 'atHome',
        title: 'DURAND Sophie 3',
        start: '2015-03-09T08:00:00',
        end: '2015-03-09T10:00:00'
      }
    ];

    return {
      getEvents: function () {
        return events;
      }
    };
  });
