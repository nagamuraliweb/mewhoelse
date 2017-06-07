(function() {
    'use strict';

	angular.module('meapp.controllers.technicianCtrl', [])
	.controller('technicianCtrl', technicianCtrl);

	technicianCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', '$stateParams'];

	function technicianCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, $stateParams) {

		if(!window.localStorage.getItem('userID')) {
			$state.go('landing');
			return;
		}
		
		$scope.logOut = function() {
			window.localStorage.removeItem('userID');
			$state.go('login');
		}

		var vm = this;
		var user_id = window.localStorage.getItem('userID');

		vm.form = {};

		dataFactory.getExperience().then(function(resp) {
			vm.experience = JSON.parse(resp.data.experiences);
		});

		dataFactory.getLanguages().then(function(resp) {
			vm.languages = JSON.parse(resp.data.languages);
		});

		dataFactory.getGender().then(function(resp) {
			vm.genders = JSON.parse(resp.data.genders);
		});

		vm.technician = {
			user_id: user_id,
			gender: '',
			dob: '',
			videos: '',
			skills: '',
			experince: '',
			city: '',
			other_ethnicity: '',
			training: '',
			languages: '',
			others_languages: ''
		};

		vm.technician.user_id = window.localStorage.getItem('userID');

		$scope.uploadFile = function(files) {
			var fd = new FormData();
			fd.append("file", files[0]);
			loaderFactory.showLoader();
			artistFactory.imageUpload(fd).then(function(resp) {
				loaderFactory.hideLoader();
				vm.technician.img_name = resp.data.img_name;
			});
		};

		vm.saveTechnicianDetails = function() {
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
