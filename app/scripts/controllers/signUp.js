'use strict';

app.controller('signUpController', function($scope, NewUser){
	$('#birthday').datepicker();
    $scope.signUp = function(user){
        NewUser.signUp(user, $scope);
    } 	
});