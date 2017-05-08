angular.module('meapp.controllers.signupCtrl', [])
	.controller('signupCtrl', ['$scope', 'loginFactory', 'loaderFactory', '$state', 'dataFactory', function($scope, loginFactory,                                                                                                      
		loaderFactory, $state, dataFactory) {

	$scope.form = {};
	$scope.user = {
		name: '',
		email: '',
		password: '',
		confirm_password: '',
		mobile: '',
		profession: ''
	};

	dataFactory.getType().then(function(resp) {
		$scope.profession_types = JSON.parse(resp.data.types);
	});

	$scope.signup = function() {
		loaderFactory.showLoader();
		loginFactory.signUp($scope.user).then(function(resp) {
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
				$scope.form.signupForm.$setPristine();
				$scope.form.signupForm.$setUntouched();
				return;
			} else {
				window.localStorage.setItem('userID', resp.data.user_id);
				//$state.go('artist-register');
			}
		});
	}

}]);
