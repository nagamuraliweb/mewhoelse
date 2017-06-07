(function() {
    'use strict';

	angular.module('meapp.controllers.clientCtrl', [])
		.controller('clientCtrl', clientCtrl);

	clientCtrl.$inject = ['dataFactory', 'loaderFactory', 'artistFactory', '$state'];

	function clientCtrl(dataFactory, loaderFactory, artistFactory, $state) {

		if(!window.localStorage.getItem('userID')) {
			$state.go('login');
			return;
		}

		$scope.logOut = function() {
			window.localStorage.removeItem('userID');
			$state.go('login');
		}

		var vm = this;

		dataFactory.getBody().then(function(resp) {
			vm.bodies = JSON.parse(resp.data.bodies);
		});

		dataFactory.getExperience().then(function(resp) {
			vm.experience = JSON.parse(resp.data.experiences);
		});

		dataFactory.getLanguages().then(function(resp) {
			vm.languages = JSON.parse(resp.data.languages);
		});

		dataFactory.getProjects().then(function(resp) {
			vm.projects = JSON.parse(resp.data.projects);
		});

		dataFactory.getRoles().then(function(resp) {
			vm.roles = JSON.parse(resp.data.roles);
		});

		dataFactory.getGender().then(function(resp) {
			vm.genders = JSON.parse(resp.data.genders);
		});

		vm.form = {};

		vm.client = {
			user_id: window.localStorage.getItem('userID'),
			gender: '',
			project: '',
			projectname: '',
			project_type: '',
			project_description: '',
			roll_type: '',
			looking_for: '',
			character_name: '',
			character_description:'',
			body_type: '',
			experince: '',
			training: '',
			languages: '',
			others_languages: '',
			production_housename: ''
		};

		vm.saveClientDetails = function() {
			loaderFactory.showLoader();

			artistFactory.saveClientDetails(vm.client).then(function(resp) {
				loaderFactory.hideLoader();
				if(resp.data.error === 1) {
					loaderFactory.showAlert('Registeration Failed', resp.data.msg);
					return;
				} else {
					loaderFactory.showAlert('Registeration Successful', resp.data.msg);
					$state.go('client-profile')
				}
			});
		}
	}
})();
