'use strict';

app.controller('loginController', function($scope, User){
    $scope.message = '';

    $scope.login = function(user){
        User.login(user, $scope);
    }
});