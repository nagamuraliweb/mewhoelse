(function() {
    'use strict';

	angular.module('meapp.controllers.technicianProfileCtrl', [])
		.controller('technicianProfileCtrl', technicianProfileCtrl);

	technicianProfileCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state'];

	function technicianProfileCtrl($scope, dataFactory, artistFactory, loaderFactory, $state) {
		if(!window.localStorage.getItem('userID')) {
			$state.go('landing');
			return;
		}

		var vm = this;
		vm.user_id = window.localStorage.getItem('userID');
		vm.version = new Date().getTime();

		dataFactory.getUserDetails(vm.user_id).then(function(resp) {
			vm.technician = JSON.parse(resp.data.user_details);
		});

		dataFactory.getType().then(function(resp) {
			var profession_types = JSON.parse(resp.data.types);
			for(var i = 0; i < profession_types.length; i++) {
				if(profession_types[i].id_type === vm.technician.user_type) {
					vm.profession = profession_types[i].type;
				}
			}
		});

		dataFactory.getExperience().then(function(resp) {
			var experience = JSON.parse(resp.data.experiences);
			for(var i = 0; i < experience.length; i++) {
				if(experience[i].id_experience === vm.technician.user_experience_id) {
					vm.exp = experience[i].type;
				}
			}
		});

		dataFactory.getLanguages().then(function(resp) {
			var languages = JSON.parse(resp.data.languages);
			for(var i = 0; i < languages.length; i++) {
				if(languages[i].id_language === vm.technician.user_language_id) {
					vm.lang = languages[i].type;
				}
			}
		});

		dataFactory.getGender().then(function(resp) {
			var genders = JSON.parse(resp.data.genders);
			for(var i = 0; i < genders.length; i++) {
				if(genders[i].id_gender === vm.technician.user_gender_id) {
					vm.gender = genders[i].type;
				}
			}
		});

		$scope.$on('youtube.player.playing', function ($event, player) {
			bestPlayer = player;
		});

		$scope.$on('youtube.player.ended', function ($event, player) {
			bestPlayer = '';
		});
		
		vm.updateDetails = function() {
			$state.go('technician-update');
		}
	}

})();
