(function() {
    'use strict';

	angular.module('meapp.controllers.clientUpdateCtrl', [])
		.controller('clientUpdateCtrl', clientUpdateCtrl);

		clientUpdateCtrl.$inject = ['dataFactory', 'loaderFactory', 'artistFactory', '$state', 'coreConstant'];

		function clientUpdateCtrl(dataFactory, loaderFactory, artistFactory, $state, coreConstant) {

			var vm = this;
			var user_id = window.localStorage.getItem('userID');

			vm.form = {};

			vm.bodies = coreConstant.bodies;
			vm.experience = coreConstant.experience;
			vm.languages = coreConstant.languages;
			vm.projects = coreConstant.projectType;
			vm.roles = coreConstant.roles;
			vm.genders = coreConstant.genders;

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

			jQuery(function ($){
	           $(".segment-select").Segment();
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
