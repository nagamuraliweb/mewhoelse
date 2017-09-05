(function() {
    'use strict';

	angular.module('meapp.controllers.technicianOverviewCtrl', [])
	.controller('technicianOverviewCtrl', technicianOverviewCtrl);

	technicianOverviewCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant', '$stateParams'];

	function technicianOverviewCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant, $stateParams) {
		var vm = this;
		vm.version = new Date().getTime();
		var languages = [];

		vm.experience = coreConstant.experience;
		vm.languages = coreConstant.languages;
		vm.genders = coreConstant.genders;

		dataFactory.getUserDetails($stateParams.id).then(function(resp) {
			vm.technician = JSON.parse(resp.data.user_details);

			vm.profession = coreConstant.type[vm.technician.user_type];
			vm.gender = coreConstant.genders[vm.technician.user_gender_id];
			vm.exp = coreConstant.experience[vm.technician.user_experience_id];

			angular.forEach(vm.technician.user_language_id.split(','), function(key) {
				languages.push(coreConstant.languages[key]);
			});

			if(vm.technician.user_language_others)
				languages.push(vm.technician.user_language_others);

			vm.lang = languages.join(', ');
		});

		$scope.$on('youtube.player.playing', function ($event, player) {
			bestPlayer = player;
		});

		$scope.$on('youtube.player.ended', function ($event, player) {
			bestPlayer = '';
		});
	}
})();
