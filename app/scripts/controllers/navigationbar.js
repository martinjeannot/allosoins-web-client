'use strict';

/**
 * @ngdoc function
 * @name allosoinsWebClientApp.controller:NavigationBarController
 * @description
 * # NavigationBarController
 * Controller of the navigation bar
 */
angular.module('allosoinsWebClientApp')
  .controller('NavigationBarController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
