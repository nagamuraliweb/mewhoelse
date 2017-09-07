(function() {
    'use strict';

	angular.module('meapp.controllers.technicianProfileCtrl', [])
		.controller('technicianProfileCtrl', technicianProfileCtrl);

	technicianProfileCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant', '$sce'];

	function technicianProfileCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant, $sce) {

		var vm = this;
		vm.user_id = window.localStorage.getItem('userID');
		vm.version = new Date().getTime();
		var languages = [];

		vm.experience = coreConstant.experience;
		vm.languages = coreConstant.languages;
		vm.genders = coreConstant.genders;

		dataFactory.getUserDetails(vm.user_id).then(function(resp) {
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

		vm.upload_video = function(src) {
			return $sce.trustAsResourceUrl(src);
		}

		$scope.$on('youtube.player.playing', function ($event, player) {
			bestPlayer = player;
		});

		$scope.$on('youtube.player.ended', function ($event, player) {
			bestPlayer = '';
		});
		
	}

})();
