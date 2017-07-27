(function() {
    'use strict';

	angular.module('meapp.controllers.artistProfileCtrl', ['youtube-embed'])                                                                                      
	.controller('artistProfileCtrl', artistProfileCtrl);

	artistProfileCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant'];

	function artistProfileCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant) {
		
		var bestPlayer = null;

		var vm = this;
		$scope.user_id = window.localStorage.getItem('userID');
		$scope.version = new Date().getTime();
		var skills = [];
		var languages = [];

		dataFactory.getUserDetails($scope.user_id).then(function(resp) {
			vm.artist = JSON.parse(resp.data.user_details);

			vm.profession = coreConstant.type[vm.artist.user_type];
			vm.body = coreConstant.bodies[vm.artist.user_body_id];
			vm.exp = coreConstant.experience[vm.artist.user_experience_id];
			vm.hair = coreConstant.hairs[vm.artist.user_hair_id];
			vm.haircolor = coreConstant.hairColors[vm.artist.user_hair_color_id];
			vm.lang = coreConstant.languages[vm.artist.user_language_id];
			vm.skin = coreConstant.skins[vm.artist.user_skin_id];
			vm.gender = coreConstant.genders[vm.artist.user_gender_id];

			angular.forEach(vm.artist.user_skills_id.split(','), function(key) {
				skills.push(coreConstant.skills[key]);
			});

			angular.forEach(vm.artist.user_language_id.split(','), function(key) {
				languages.push(coreConstant.languages[key]);
			});

			vm.skill = skills.join(', ');
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
