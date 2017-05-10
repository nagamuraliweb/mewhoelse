angular.module('meapp.controllers.forgotCtrl', [])
	.controller('forgotCtrl', ['$scope', 'loginFactory', 'loaderFactory', '$state', function($scope, loginFactory, loaderFactory, $state) {

	$scope.form = {};
	$scope.user = {
		email: '',
		password: '',
		confirm_password: ''
	};

	$scope.forgotPassword = function() {
		loaderFactory.showLoader();
		if($scope.user.password !== $scope.user.confirm_password) {
			loaderFactory.hideLoader();
			var errorMsg = "Password and Confirm password does not match";
			loaderFactory.showAlert('Forgot Password', errorMsg);
			$scope.user = {
				email: '',
				password: '',
				confirm_password: ''
			};
			$scope.form.forgotForm.$setPristine();
			$scope.form.forgotForm.$setUntouched();
		} else {
			loginFactory.forgotPassword($scope.user).then(function(resp) {
				loaderFactory.hideLoader();
				if(resp.data.error === 1) {
					loaderFactory.showAlert('Forgot Password', resp.data.msg);
					$scope.user = {
						email: '',
						password: '',
						confirm_password: ''
					};
					$scope.form.forgotForm.$setPristine();
					$scope.form.forgotForm.$setUntouched();
					return;
				} else {
					loaderFactory.showAlert('Forgot Password', resp.data.msg);
					$state.go('login');
				}
			});
		}
		
	}

}]);
