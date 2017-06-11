(function() {
    'use strict';

	angular.module('meapp.controllers.technicianUpdateCtrl', [])
		.controller('technicianUpdateCtrl', technicianUpdateCtrl);

	technicianUpdateCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state'];

	function technicianUpdateCtrl ($scope, dataFactory, artistFactory, loaderFactory, $state) {

		var vm = this;
		var user_id = window.localStorage.getItem('userID');

		vm.form = {};

		dataFactory.getGender().then(function(resp) {
			vm.genders = JSON.parse(resp.data.genders);
		});

		dataFactory.getExperience().then(function(resp) {
			vm.experience = JSON.parse(resp.data.experiences);
		});

		dataFactory.getLanguages().then(function(resp) {
			vm.languages = JSON.parse(resp.data.languages);
		});

		dataFactory.getUserDetails(user_id).then(function(resp) {
			var tech_data = JSON.parse(resp.data.user_details);

			vm.technician = {
				user_id: user_id,
				gender: tech_data.user_gender_id,
				dob: new Date(tech_data.user_dob),
				videos: tech_data.user_videos,
				skills: tech_data.user_skills_others,
				experince: tech_data.user_experience_id,
				city: tech_data.user_city,
				other_ethnicity: tech_data.user_ethinicity,
				training: tech_data.user_is_professional,
				languages: tech_data.user_language_id,
				others_languages: tech_data.user_language_others
			};
		});

		$scope.uploadFile = function(files) {
			var fd = new FormData();
			fd.append("file", files[0]);
			loaderFactory.showLoader();
			artistFactory.imageUpload(fd).then(function(resp) {
				loaderFactory.hideLoader();
				vm.technician.img_name = resp.data.img_name;
			});
		};

		vm.updateTechnicianDetails = function() {
			loaderFactory.showLoader();
			artistFactory.saveTechnicianDetails(vm.technician).then(function(resp) {
				loaderFactory.hideLoader();
				if(resp.data.error === 1) {
					loaderFactory.showAlert('Registeration Failed', resp.data.msg);
					return;
				} else {
					loaderFactory.showAlert('Registeration Successful', resp.data.msg);
					$state.go('technician-profile');
				}
			});
		}
	}

})();
