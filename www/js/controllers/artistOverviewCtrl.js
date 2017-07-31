(function() {
    'use strict';

	angular.module('meapp.controllers.artistOverviewCtrl', ['youtube-embed'])                                                                                      
	.controller('artistOverviewCtrl', artistOverviewCtrl);

	artistOverviewCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', '$stateParams', 'coreConstant'];

	function artistOverviewCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, $stateParams, coreConstant) {
		
		var bestPlayer = null;

		var vm = this;
		$scope.user_id = $stateParams.user_id;
		$scope.version = new Date().getTime();

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
			vm.skill = coreConstant.skills[vm.artist.user_skills_id];
		});

		$scope.$on('youtube.player.playing', function ($event, player) {
		    bestPlayer = player;
		});

		$scope.$on('youtube.player.ended', function ($event, player) {
		    bestPlayer = '';
		});

	}
})();
