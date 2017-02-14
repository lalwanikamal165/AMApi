'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanAngularApp
 */

var app = angular.module('yeomanAngularApp');

app.controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});
