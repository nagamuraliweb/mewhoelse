angular.module('meapp.factories.loginFactory', [])
	.factory('loginFactory', ['loginService', '$q', function(loginService, $q) {                                                                                          

	return {
		userLogin: userLogin,
		signUp: signUp
	}

	function userLogin(user_email, user_password) {
		var deffered = $q.defer();
		loginService.userLogin(user_email, user_password).then(function (resp) {
			console.log(resp);
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function signUp(user) {
		var deffered = $q.defer();
		loginService.signUp(user).then(function(resp) {
			console.log(resp);
			deffered.resolve(resp);
		}, function(error) {
			console.log(error);
		});
		return deffered.promise;
	}

}]);
