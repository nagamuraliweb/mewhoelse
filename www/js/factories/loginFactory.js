angular.module('meapp.factories.loginFactory', [])
	.factory('loginFactory', ['loginService', '$q', function(loginService, $q) {                                                                                          

	return {
		userLogin: userLogin
	}

	function userLogin(user_email, user_password) {
		var deffered = $q.defer();
		loginService.userLogin(user_email, user_password).then(function (resp) {
			deffered.resolve(resp.data);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

}]);
