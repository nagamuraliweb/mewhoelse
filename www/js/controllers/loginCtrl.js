angular.module('meapp.controllers.loginCtrl', [])
	.controller('loginCtrl', ['$scope', 'loginFactory', 'loaderFactory', '$state', function($scope, loginFactory,                                               
		loaderFactory, $state) {

	$scope.login = {
		user_email: '',
		user_password: ''
	}

	$scope.login = function() {
		loaderFactory.showLoader();
		loginFactory.userLogin($scope.login.user_email, $scope.login.user_password).then(function (resp) {
			loaderFactory.hideLoader();
			if(resp.status == 0) {
				loaderFactory.showAlert('Login', resp.error);
				$scope.login.user_email = '';
				$scope.login.user_password = '';
				$scope.loginForm.$setPristine();
				$scope.loginForm.$setUntouched();
				return;
			} else {
				window.localStorage.setItem('userID', resp.data.ID);
				$state.go('artist-register');
			}
		});
	}

}]);
