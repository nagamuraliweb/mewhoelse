angular.module('meapp.services.loginService', [])
	.service('loginService', ['$http', function($http) {

	this.userLogin = function(user_email, user_pass) {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=userLogin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: { 
                email: user_email, 
                password: user_pass
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

	this.signUp = function(user) {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=signUp',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: { 
                name: user.name, 
                email: user.email, 
                password: user.password, 
                confirm_password: user.confirm_password, 
                mobile: user.mobile, 
                profession: user.profession
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.forgotPassword = function(email, password, confirm_password) {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=forgetPassword',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: { 
                email: email, 
                password: password, 
                confirm_password: confirm_password
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.hasRegistered = function(user_id) {
        var request = {
            method: 'GET',
            url: 'http://mewhoelse.in/api/api.php?f=hasRegistered&user_id='+user_id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getUsersList = function() {
        var request = {
            method: 'GET',
            url: 'http://mewhoelse.in/api/api.php?f=getUsersList',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.updateUserStatus = function(user_id) {
        var request = {
            method: 'GET',
            url: 'http://mewhoelse.in/api/api.php?f=updateUserStatus&user_id='+user_id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

}]);
