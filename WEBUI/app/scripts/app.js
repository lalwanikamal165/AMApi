'use strict';

/**
 * @ngdoc overview
 * @name amritClientApp
 * @description
 * # amritClientApp
 *
 * Main module of the application.
 */
angular
  .module('amritClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      }).when("/login", {
                templateUrl: "views/login.html",
                controller: "loginCtrl"
            }).when("/register", {
               templateUrl: "views/register.html",
                controller: "registerCtrl"
            })
      .otherwise({
        redirectTo: '/'
      });
  });
