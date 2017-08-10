(function() {
    'use strict';

	angular.module('meapp.controllers.signupCtrl', [])
		.controller('signupCtrl', signupCtrl);

	signupCtrl.$inject = ['loginFactory', 'loaderFactory', '$state', 'coreConstant'];

	function signupCtrl(loginFactory, loaderFactory, $state, coreConstant) {
		
		var vm = this;

		vm.form = {};
		vm.user = {
			name: '',
			email: '',
			password: '',
			confirm_password: '',
			mobile: '',
			profession: ''
		};

		vm.profession_types = coreConstant.type;

		vm.signup = function() {
			loaderFactory.showLoader();
			loginFactory.signUp(vm.user).then(function(resp) {
				loaderFactory.hideLoader();
				if(resp.data.error === 1) {
					loaderFactory.showAlert('Signup', resp.data.msg);
					return;
				} else {
					window.localStorage.setItem('userID', resp.data.user_id);

					if(vm.user.profession === '1') {
						$state.go('artist-register');
					} else if(vm.user.profession === '2') {
						$state.go('technician-register');
					} else {
						$state.go('client-register');
					}
				}

			});
		}

	}
})();
