'use strict';

/**
 * @ngdoc function
 * @name allosoinsWebClientApp.controller:AgendaController
 * @description
 * # AgendaController
 * Controller of the Agenda feature
 */
angular.module('allosoinsWebClientApp')
  .controller('AgendaController', function ($scope) {
    $scope.uiConfig = {
      calendar: {
        header: {
          left: '',
          center: 'prev,next title',
          right: 'agendaDay agendaWeek'
        },
        defaultView: 'agendaWeek',
        lang: 'fr',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          // 2015-03-09 8:00 - 10:00
          {
            title: 'BIGO Emmanuel',
            start: '2015-03-09T08:00:00',
            end: '2015-03-09T10:00:00',
            color: '#ff9797'
          },
          {
            title: 'DUCHENE Léa',
            start: '2015-03-09T08:00:00',
            end: '2015-03-09T10:00:00',
            color: '#ffb1ed'
          },
          {
            title: 'PETIT Etienne',
            start: '2015-03-09T08:00:00',
            end: '2015-03-09T10:00:00',
            color: '#beb5c9'
          },
          {
            title: 'MARCEL Judith',
            start: '2015-03-09T08:00:00',
            end: '2015-03-09T10:00:00',
            color: '#dfdf68'
          },
          {
            title: 'DUPONT Michel',
            start: '2015-03-09T08:00:00',
            end: '2015-03-09T10:00:00',
            color: '#97cb97'
          },
          {
            title: 'DELANOE Bertrand',
            start: '2015-03-09T08:00:00',
            end: '2015-03-09T10:00:00'
          },
          // 2015-03-09 10:00 - 12:00
          {
            title: 'ALLAND Patricia',
            start: '2015-03-09T10:00:00',
            end: '2015-03-09T12:00:00'
          },
          {
            title: 'LESAGE Serge',
            start: '2015-03-09T10:00:00',
            end: '2015-03-09T12:00:00'
          },
          {
            title: 'PERSE Valérie',
            start: '2015-03-09T10:00:00',
            end: '2015-03-09T12:00:00'
          },
          {
            title: 'EL AYOUBI Céline',
            start: '2015-03-09T10:00:00',
            end: '2015-03-09T12:00:00'
          },
          {
            title: 'JEANNOT Martin',
            start: '2015-03-09T10:00:00',
            end: '2015-03-09T12:00:00'
          },
          {
            title: 'PAGE Mélanie',
            start: '2015-03-09T10:00:00',
            end: '2015-03-09T12:00:00'
          },
          {
            title: 'ROSTAND Patrick',
            start: '2015-03-09T10:00:00',
            end: '2015-03-09T12:00:00'
          },
          {
            title: 'BASSE Hortense',
            start: '2015-03-09T10:00:00',
            end: '2015-03-09T12:00:00'
          }
        ]
      }
    };

    $scope.eventSources = [];

    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();
  });
