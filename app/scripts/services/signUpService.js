'use strict';

app.factory('NewUser', ['$http', function ($http) {
    var NewUser = function (data) {
        angular.extend(this, data);
    };

    NewUser.signUp = function (user, $scope) {
        var url = 'http://121.40.126.220/api/v1/createuser/';

        return $http.post(url, user).success(function (data) {
            //IMPORTANT: You need to activate always_return_data in your ressource (see example)
            user.id = data.id;
            console.log(data);
            $scope.message = '成功';
        }).error(function (data) {
            console.log(data);
            $scope.message = data.error;
        });
    };

    return NewUser;
}]);