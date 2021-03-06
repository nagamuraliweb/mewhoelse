(function() {
    'use strict';

	angular.module('meapp.controllers.loginCtrl', [])
	.controller('loginCtrl', loginCtrl);

	loginCtrl.$inject = ['$scope', 'loginFactory', 'loaderFactory', '$state', 'dataFactory'];

	function loginCtrl($scope, loginFactory, loaderFactory, $state, dataFactory) {
		
		$scope.form = {};
		$scope.login = {
			user_email: '',
			user_password: ''
		};
		
		$scope.login = function() {
			loaderFactory.showLoader();
			loginFactory.userLogin($scope.login.user_email, $scope.login.user_password).then(function (resp) {
				loaderFactory.hideLoader();

				if(resp.data.error === 1) {
					loaderFactory.showAlert('Login', resp.data.msg);
					$scope.login = {
						user_email: '',
						user_password: ''
					};
					$scope.form.loginForm.$setPristine();
					$scope.form.loginForm.$setUntouched();
					return;
				} else {
					window.localStorage.setItem('userID', resp.data.user_id);
					if(resp.data.user_id) {
						loginFactory.hasRegistered(resp.data.user_id).then(function(rep) {
							if(rep.data.has_registered === true) {
								loginFactory.redirectProfile(resp.data.user_id);
							} else {
								loginFactory.redirectRegister(resp.data.user_id);
							}
							
						});
					}
					
				}
			});
		}

	}
})();
