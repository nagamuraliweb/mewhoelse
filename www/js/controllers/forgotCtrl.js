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
		loginFactory.forgotPassword($scope.user).then(function(resp) {
			console.log(resp);
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
				//window.localStorage.setItem('userID', resp.data.ID);
				//$state.go('artist-register');
			}
		});
	}

}]);
