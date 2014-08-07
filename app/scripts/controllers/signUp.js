'use strict';

app.controller('signUpController', function($scope,NewUser,$location){
	$('#birthday').datepicker();
    $scope.signUp = function(user){
        NewUser.signUp(user, $scope);
        $location.url("/upload");
    }
    $scope.pswdvalid=function(user) {
        if(user){
            if(user.password && user.password2){
                return !(user.password == user.password2);
            }else{
                return true;
            }
        }else{
            return true;
        }
    }
    $scope.check=function(){
    	if ($scope.user.password != $scope.user.password2) {
    		$scope.message="两次密码不一致";

    	}else{
    		$scope.message="";   		
    	}
    }

});