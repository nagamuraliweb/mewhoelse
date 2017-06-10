angular.module('meapp.factories.loginFactory', [])
	.factory('loginFactory', ['loginService', '$q', 'dataFactory', '$state', function(loginService, $q, dataFactory, $state) {                                                                                          

	return {
		userLogin: userLogin,
		signUp: signUp,
		forgotPassword: forgotPassword,
		redirectRegister: redirectRegister,
		hasRegistered: hasRegistered,
		redirectProfile: redirectProfile
	}

	function userLogin(user_email, user_password) {
		var deffered = $q.defer();
		loginService.userLogin(user_email, user_password).then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function signUp(user) {
		var deffered = $q.defer();
		loginService.signUp(user).then(function(resp) {
			deffered.resolve(resp);
		}, function(error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function forgotPassword(email, password, confirm_password) {
		var deffered = $q.defer();
		loginService.forgotPassword(email, password, confirm_password).then(function(resp) {
			deffered.resolve(resp);
		}, function(error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function hasRegistered(user_id) {
		var deffered = $q.defer();
		loginService.hasRegistered(user_id).then(function(resp) {
			deffered.resolve(resp);
		}, function(error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function redirectRegister(userId){
		dataFactory.getUserDetails(userId).then(function(resp) {
			var userdetails = JSON.parse(resp.data.user_details);
			var user_type = parseInt(userdetails.user_type);
			switch (user_type) {
				case 1: $state.go('artist-register');
						break;
				case 2: $state.go('technician-register');
						break;
				case 3: $state.go('client-register');
						break;
				default: console.log('Login');
			}
		});
	}

	function redirectProfile(userId){
		dataFactory.getUserDetails(userId).then(function(resp) {
			var userdetails = JSON.parse(resp.data.user_details);
			var user_type = parseInt(userdetails.user_type);
			switch (user_type) {
				case 1: $state.go('artist-profile');
						break;
				case 2: $state.go('technician-profile');
						break;
				case 3: $state.go('client-profile');
						break;
				default: console.log('Login');
			}
		});
	}

}]);
