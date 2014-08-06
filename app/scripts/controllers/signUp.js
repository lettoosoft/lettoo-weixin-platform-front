'use strict';

app.controller('signUpController', function($scope, NewUser){
<<<<<<< HEAD
	$('#birthday').datepicker();
=======

>>>>>>> 274ff49d94357ed608066b34c566be7958dbcc7d
    $scope.signUp = function(user){
        NewUser.signUp(user, $scope);
    }
   
    	
    	
});