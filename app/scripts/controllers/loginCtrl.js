'use strict';

app.controller('loginController', function($scope, loginService){
    $scope.message = '';

    $scope.login = function(user){
        loginService.login(user, $scope);
    }
});