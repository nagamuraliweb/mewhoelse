angular.module('meapp.services.loginService', [])
	.service('loginService', ['$http', function($http) {

	this.userLogin = function(user_email, user_pass) {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=userLogin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: { email: user_email, password: user_pass }
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
            data: { name: user.name, email: user.email, password: user.password, confirm_password: user.confirm_password, mobile: parseInt(user.mobile), profession: parseInt(user.profession) }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.forgotPassword = function(user) {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=forgetPassword',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: { email: user.email, password: user.password, confirm_password: user.confirm_password }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

}]);
