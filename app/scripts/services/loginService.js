'use strict';

app.factory('User', ['$http', function ($http) {
    var User = function (data) {
        angular.extend(this, data);
    };

    User.login = function (user, scope) {
        var url = 'http://121.40.126.220/api/v1/user/login/';

        return $http.post(url, user).success(function (data) {
            //IMPORTANT: You need to activate always_return_data in your ressource (see example)
            user.id = data.id;
            scope.message = '成功';
        }).error(function (data) {
            console.log(data);
            scope.message = data.error;
        });
    };

    return User;
}]);
