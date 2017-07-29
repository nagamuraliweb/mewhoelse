(function() {
    'use strict';

	angular.module('meapp.controllers.clientUpdateCtrl', [])
		.controller('clientUpdateCtrl', clientUpdateCtrl);

		clientUpdateCtrl.$inject = ['dataFactory', 'loaderFactory', 'artistFactory', '$state', 'coreConstant'];

		function clientUpdateCtrl(dataFactory, loaderFactory, artistFactory, $state, coreConstant) {

			var vm = this;
			var user_id = window.localStorage.getItem('userID');

			vm.form = {};
			vm.showProjectType = vm.showRollType = vm.showBodies = true;
			vm.showLanguages = true;
			vm.selectedLanguages = {};

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
					project: client_data.user_project,
					projectname: client_data.user_project_name,
					project_type: client_data.user_project_id,
					project_description: client_data.user_project_description,
					roll_type: client_data.user_role_id,
					looking_for: client_data.user_looking_for,
					character_name: client_data.user_character_name,
					body_type: client_data.user_body_id,
					experince: client_data.user_experience_id,
					training: client_data.user_is_professional,
					languages: client_data.user_language_id,
					others_languages: client_data.user_language_others,
					production_housename: client_data.user_production_house
				};

				angular.forEach(client_data.user_language_id, function(key) {
					vm.selectedLanguages.push(key);
				});
			});

			jQuery(function ($){
	           $(".segment-select").Segment();
	      	});

			vm.listProjectType = function() {
				vm.showProjectType = (vm.showProjectType) ? false : true;
			}

			vm.listRollType = function() {
				vm.showRollType = (vm.showRollType) ? false : true;
			}

			vm.listBodies = function() {
				vm.showBodies = (vm.showBodies) ? false : true;
			}

			vm.listLanguages = function() {
				vm.showLanguages = (vm.showLanguages) ? false : true;
			}

			vm.updateClientDetails = function() {
				vm.client.project_type = vm.selectedProjectType;
				vm.client.languages = Object.keys(vm.selectedLanguages).join(',');
				vm.client.body_type = vm.selectedBodies;
				vm.client.roll_type = vm.selectedRollType;
				vm.client.project = $('#project').val();
				vm.client.looking_for = $('#looking_for').val();
				vm.client.experince = $('#experience').val();
				vm.client.training = $('#training').val();

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
