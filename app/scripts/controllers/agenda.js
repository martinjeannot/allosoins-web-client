'use strict';

/**
 * @ngdoc function
 * @name allosoinsWebClientApp.controller:AgendaController
 * @description
 * # AgendaController
 * Controller of the Agenda feature
 */
angular.module('allosoinsWebClientApp')
  .controller('AgendaController', function ($scope, ngDialog, $log) {
    $scope.uiConfig = {
      calendar: {
        header: {
          left: '',
          center: 'prev,next title',
          right: 'month agendaWeek agendaDay'
        },
        defaultView: 'agendaWeek',
        lang: 'fr',
        editable: true,
        droppable: true, // allow events to be dropped onto the calendar
        eventLimit: true, // allow "more" link when too many events
        events: [
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
        ],
        eventRender: function (event, element, view) {
          switch (view.type) {
            case 'month':
              // hide time if atHome event
              if (event.type === 'atHome') {
                element.find('.fc-time').css('display', 'none');
              }
              element.popover({
                title: event.title,
                trigger: 'click hover',
                delay: {
                  show: 50,
                  hide: 400
                }
              });
              // add event title ellipsis
              //element.find('.fc-title').addClass('ellipsis');
              // add event toolbar
              /*element.find('.fc-title').after(
               '<span class="fc-event-toolbar">' +
               '<span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>' +
               '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
               '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span></span>');*/
              break;
            case 'agendaWeek':
              break;
            case 'agendaDay':
              element.find('.fc-title').append('<br/> test agenda day');
              break;
          }
        },
        eventClick: function (event/*, jsEvent, view*/) {
          ngDialog.open({
            template: 'views/event.html',
            data: event
          });
        }
      }
    };

    $scope.eventSources = [];

    $scope.today = function () {
      $scope.dt = new Date();
    };
    $scope.today();
  });
