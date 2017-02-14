(function () {
    'use strict';

var app =   angular.module('amritClientApp');
   
    app.controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope','$rootScope', '$location'];

    function loginCtrl($scope, $rootScope, $location) {
        $scope.pageClass = 'page-login';
        $scope.login = login;
        $scope.user = {};

        function login() {
           // membershipService.login($scope.user, loginCompleted)
        }

        function loginCompleted(result) {
            if (result.data.success) {
               // membershipService.saveCredentials($scope.user);
               // notificationService.displaySuccess('Hello ' + $scope.user.username);
                $scope.userData.displayUserInfo();
                if ($rootScope.previousState)
                    $location.path($rootScope.previousState);
                else
                    $location.path('/');
            }
            else {
            //    notificationService.displayError('Login failed. Try again.');
            }
        }
    }

})();