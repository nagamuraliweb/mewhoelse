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
			if(resp.data.error === 1) {
				loaderFactory.showAlert('Signup', resp.data.msg);
				$scope.user = {
					name: '',
					email: '',
					password: '',
					confirm_password: '',
					mobile: '',
					profession: ''
				};
				$scope.signupForm.$setPristine();
				$scope.signupForm.$setUntouched();
				return;
			} else {
				//window.localStorage.setItem('userID', resp.data.ID);
				//$state.go('artist-register');
			}
		});
	}

}]);
