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

		var userId = window.localStorage.getItem('userID');
		if(userId) {
			loginFactory.checkLogin(userId);
		}
		
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
							console.log(rep);
							//loginFactory.checkLogin(resp.data.user_id);
						});
					}
					
				}
			});
		}

	}
})();
