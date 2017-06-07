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
		
		$scope.logOut = function() {
			window.localStorage.removeItem('userID');
			$state.go('login');
		}

		var vm = this;
		vm.user_id = window.localStorage.getItem('userID');
		vm.version = new Date().getTime();

		dataFactory.getUserDetails(vm.user_id).then(function(resp) {
			vm.technician = JSON.parse(resp.data.user_details);
		});

		dataFactory.getType().then(function(resp) {
			var profession_types = JSON.parse(resp.data.types);
			vm.profession = profession_types[vm.technician.user_type];
		});

		dataFactory.getExperience().then(function(resp) {
			var experience = JSON.parse(resp.data.experiences);
			vm.exp = experience[vm.technician.user_experience_id];
		});

		dataFactory.getSkills().then(function(resp) {
			var skills = JSON.parse(resp.data.skills);
			vm.skills = skills[vm.technician.user_skills_id];
		});

		dataFactory.getLanguages().then(function(resp) {
			var languages = JSON.parse(resp.data.languages);
			vm.lang = languages[vm.technician.user_language_id];
		});

		dataFactory.getGender().then(function(resp) {
			var genders = JSON.parse(resp.data.genders);
			vm.gender = genders[vm.technician.user_gender_id];
		});

		$scope.$on('youtube.player.playing', function ($event, player) {
			bestPlayer = player;
		});

		$scope.$on('youtube.player.ended', function ($event, player) {
			bestPlayer = '';
		});
		
	}

})();
