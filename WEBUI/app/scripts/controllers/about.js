(function () {

'use strict';

/**
 * @ngdoc function
 * @name amritClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the amritClientApp
 */
  var app =   angular.module('amritClientApp');
  app.controller('AboutCtrl',AboutCtrl);
   AboutCtrl.$inject = ['$scope','$rootScope', '$location'];

 function AboutCtrl($scope, $rootScope, $location)
 {
     $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 } 

})();
