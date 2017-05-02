angular.module('meapp.services.loginService', [])
	.service('loginService', ['$http', function($http) {

	this.userLogin = function(user_email, user_pass) {
		return $http.get('https://koolbooking.com/android_app/login?user_login='+user_email+'&user_pass='+user_pass)
		.then(function (resp) {
			return resp;
		});		
	}

}]);
