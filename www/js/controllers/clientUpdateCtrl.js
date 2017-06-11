(function() {
    'use strict';

	angular.module('meapp.controllers.clientUpdateCtrl', [])
		.controller('clientUpdateCtrl', clientUpdateCtrl);

		clientUpdateCtrl.$inject = ['dataFactory', 'loaderFactory', 'artistFactory', '$state'];

		function clientUpdateCtrl(dataFactory, loaderFactory, artistFactory, $state) {

			var vm = this;
			var user_id = window.localStorage.getItem('userID');

			vm.form = {};

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

			dataFactory.getUserDetails(user_id).then(function(resp) {
				var client_data = JSON.parse(resp.data.user_details);

				vm.client = {
					user_id: user_id,
					gender: client_data.user_gender_id,
					project: client_data.user_project,
					projectname: client_data.user_project_name,
					project_type: client_data.user_project_id,
					project_description: client_data.user_project_description,
					roll_type: client_data.user_role_id,
					looking_for: client_data.user_looking_for,
					character_name: client_data.user_character_name,
					character_description: client_data.user_character_description,
					body_type: client_data.user_body_id,
					experince: client_data.user_experience_id,
					training: client_data.user_is_professional,
					languages: client_data.user_language_id,
					others_languages: client_data.user_language_others,
					production_housename: client_data.user_production_house
				};
			});

			vm.updateClientDetails = function() {
				loaderFactory.showLoader();
				
				artistFactory.saveClientDetails(vm.client).then(function(resp) {
					loaderFactory.hideLoader();

					if(resp.data.error === 1) {
						loaderFactory.showAlert('Updation Failed', resp.data.msg);
						return;
					} else {
						loaderFactory.showAlert('Updation Successful', resp.data.msg);
						$state.go('client-profile');
					}
				});
			}

		}
})();
