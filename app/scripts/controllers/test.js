'use strict';

app.controller('signUpController', function($scope, NewUser){
    $scope.signUp = function(user){
        NewUser.signUp(user, $scope);
    }
   
    	
    	
});