'use strict';

app.controller('uploadCtrl', function($scope, User,$location){
    $scope.message = '123';
    $scope.login = function(user){
        User.login(user, $scope);
    }
    $scope.test = function(){
       var p=$scope.user.password;
       $scope.message =p+":"+p.length;
       var w =$("#inputPassword3").width();
       $("#inputPassword3").width(w+p.length);
       $location.url("/about");
    }    
});