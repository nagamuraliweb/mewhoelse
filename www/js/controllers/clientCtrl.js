(function() {
    'use strict';

	angular.module('meapp.controllers.clientCtrl', [])
		.controller('clientCtrl', clientCtrl);

	clientCtrl.$inject = ['dataFactory', 'loaderFactory', 'artistFactory', '$state', '$scope', 'coreConstant'];

	function clientCtrl(dataFactory, loaderFactory, artistFactory, $state, $scope, coreConstant) {

		var vm = this;
		var user_id = window.localStorage.getItem('userID');

		if(user_id) {
			dataFactory.hasRegistered(user_id).then(function(resp) {
				if(resp.data.has_registered) {
					$state.go('client-profile');
				}
			});
		}

		vm.form = {};
		vm.showProjectType = vm.showRollType = vm.showBodies = false;
		vm.showLanguages = false;

		vm.bodies = coreConstant.bodies;
		vm.experience = coreConstant.experience;
		vm.languages = coreConstant.languages;
		vm.projects = coreConstant.projectType;
		vm.roles = coreConstant.roles;
		vm.genders = coreConstant.genders;

		vm.client = {
			user_id: user_id,
			project: '',
			projectname: '',
			project_type: '',
			project_description: '',
			roll_type: '',
			looking_for: '',
			character_name: '',
			body_type: '',
			experince: '',
			training: '',
			languages: '',
			others_languages: '',
			production_housename: ''
		};

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

		vm.saveClientDetails = function() {
			if(!validate())
			 	return;

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
					loaderFactory.showAlert('Registeration Failed', resp.data.msg);
					return;
				} else {
					loaderFactory.showAlert('Registeration Successful', resp.data.msg);
					$state.go('client-profile')
				}
			});
		}

		function validate() {
			try {

				if (vm.client.projectname === '')
					throw "Enter Project Name";

				if (!vm.selectedProjectType)
					throw "Choose Project Type";

				if (!vm.selectedRollType)
					throw "Choose Roll Type";

				if(vm.client.character_name === '')
					throw "Enter Character Name";
				
				if (vm.client.project_description === '')
					throw "Enter Project Description";
				
				if (!vm.selectedBodies)
					throw "Choose Body Type";

				if (!vm.selectedLanguages)
					throw "Choose Languages";
				
				if (vm.client.production_housename === '')
					throw "Enter Production Housename";
			} catch(e) {
				loaderFactory.showAlert(e);
				return false;
			}

			return true;
		}
	}
})();
