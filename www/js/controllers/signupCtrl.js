angular.module('meapp.controllers.signupCtrl', [])
	.controller('signupCtrl', ['$scope', 'loginFactory', 'loaderFactory', '$state', function($scope, loginFactory,                                                                                                      
		loaderFactory, $state) {

	$scope.user = {
		name: '',
		email: '',
		password: '',
		confirm_password: '',
		mobile: '',
		profession: ''
	};

	$scope.signup = function() {
		loaderFactory.showLoader();
		loginFactory.signUp($scope.user).then(function(resp) {
			console.log(resp);
			loaderFactory.hideLoader();
			if(resp.status === 1) {
				loaderFactory.showAlert('Signup', resp.error);
				$scope.user.name = '';
				$scope.user.email = '';
				$scope.user.password = '';
				$scope.user.confirm_password = '';
				$scope.user.mobile = '';
				$scope.user.profession = '';
				$scope.logisignupFormnForm.$setPristine();
				$scope.signupForm.$setUntouched();
				return;
			} else {
				//window.localStorage.setItem('userID', resp.data.ID);
				//$state.go('artist-register');
			}
		});
	}

}]);
