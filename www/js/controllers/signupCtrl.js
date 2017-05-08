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
				switch (resp.data.user_id) {
					case 1: $state.go('artist-register');
							break;
					case 2: $state.go('technicians-register');
							break;
					case 3: $state.go('clients-register');
							break;
					default: console.log('Signup');
				}
			}

		});
	}

}]);
