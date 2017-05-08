angular.module('meapp.controllers.loginCtrl', [])
	.controller('loginCtrl', ['$scope', 'loginFactory', 'loaderFactory', '$state', function($scope, loginFactory,                                               
		loaderFactory, $state) {

	$scope.form = {};
	$scope.login = {
		user_email: '',
		user_password: ''
	};

	var userId = window.localStorage.getItem('userID');
	switch (userId) {
		case 1: $state.go('artist-register');
				break;
		case 2: $state.go('technicians-register');
				break;
		case 3: $state.go('clients-register');
				break;
		default: console.log('Login');
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
				//$state.go('artist-register');
			}
		});
	}

}]);
