'use strict';

/**
 * @ngdoc directive
 * @name allosoinsWebClientApp.directive:ourDatetimepicker
 * @description
 * # ourDatetimepicker
 */
angular.module('allosoinsWebClientApp')
  .directive('ourDatetimepicker', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/our-datetimepicker.html',
      scope: {
        startDate: '=',
        endDate: '='
      },
      link: function postLink(scope, element/*, attrs*/) {
        element.find('.input-group.date').datepicker({
          format: 'dd/mm/yyyy',
          autoclose: true,
          defaultViewDate: {
            year: scope.startDate.year(),
            month: scope.startDate.month(),
            day: scope.startDate.day()
          },
          startDate: new Date()
        });
        scope.startDateValue = scope.startDate.format('DD/MM/YYYY');
        scope.hourValues = [
          {value: '6', label: '06:00 - 08:00'},
          {value: '8', label: '08:00 - 10:00'},
          {value: '10', label: '10:00 - 12:00'},
          {value: '12', label: '12:00 - 14:00'},
          {value: '14', label: '14:00 - 16:00'},
          {value: '16', label: '16:00 - 18:00'},
          {value: '18', label: '18:00 - 20:00'}
        ];
        scope.startHour = scope.hourValues.filter(function (hourValue) {
          return scope.startDate.hour() == hourValue.value;
        })[0];
      }
    };
  });
