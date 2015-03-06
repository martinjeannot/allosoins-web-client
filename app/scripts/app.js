'use strict';

/**
 * @ngdoc overview
 * @name allosoinsWebClientApp
 * @description
 * # allosoinsWebClientApp
 *
 * Main module of the application.
 */
angular
  .module('allosoinsWebClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.calendar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/agenda', {
        templateUrl: 'views/agenda.html',
        controller: 'AgendaController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
