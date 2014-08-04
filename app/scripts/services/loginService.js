'use strict';

app.factory('loginService', function(){
    return {
        login: function(user, scope){
            if (user.email === 'abc@abc.com' && user.password === '111111') {
                scope.message = '成功';
                return true;
            } else {
                scope.message = '失败';
                return false;
            }
        }
    }
});