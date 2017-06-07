(function() {
    'use strict';

	angular.module('meapp.controllers.artistProfileCtrl', ['youtube-embed'])                                                                                      
	.controller('artistProfileCtrl', artistProfileCtrl);

	artistProfileCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state'];

	function artistProfileCtrl($scope, dataFactory, artistFactory, loaderFactory, $state) {
		
		var bestPlayer = null;

		if(!window.localStorage.getItem('userID')) {
			$state.go('landing');
			return;
		}

		$scope.logOut = function() {
			window.localStorage.removeItem('userID');
			$state.go('login');
		}

		var vm = this;
		$scope.user_id = window.localStorage.getItem('userID');
		$scope.version = new Date().getTime();

		dataFactory.getUserDetails($scope.user_id).then(function(resp) {
			vm.artist = JSON.parse(resp.data.user_details);
		});

		dataFactory.getType().then(function(resp) {
			var profession_types = JSON.parse(resp.data.types);
			vm.profession = profession_types[vm.artist.user_type];
		});

		dataFactory.getBody().then(function(resp) {
			var bodies = JSON.parse(resp.data.bodies);
			vm.body = bodies[vm.artist.user_body_id];
		});

		dataFactory.getExperience().then(function(resp) {
			var experience = JSON.parse(resp.data.experiences);
			vm.exp = experience[vm.artist.user_experience_id];
		});

		dataFactory.getHairs().then(function(resp) {
			var hairs = JSON.parse(resp.data.hairs);
			vm.hair = hairs[vm.artist.user_hair_id];
		});

		dataFactory.getHairColors().then(function(resp) {
			var haircolors = JSON.parse(resp.data.hairColors);
			vm.haircolor = haircolors[vm.artist.user_hair_color_id];
		});

		dataFactory.getLanguages().then(function(resp) {
			var languages = JSON.parse(resp.data.languages);
			vm.lang = languages[vm.artist.user_language_id];
		});

		dataFactory.getSkills().then(function(resp) {
			var skills = JSON.parse(resp.data.skills);
			vm.skill = skills[vm.artist.user_skills_id];
		});

		dataFactory.getSkins().then(function(resp) {
			var skins = JSON.parse(resp.data.skins);
			vm.skin = skins[vm.artist.user_skin_id];
		});

		dataFactory.getGender().then(function(resp) {
			var genders = JSON.parse(resp.data.genders);
			vm.gender = genders[vm.artist.user_gender_id];
		});

		$scope.$on('youtube.player.playing', function ($event, player) {
		    bestPlayer = player;
		});

		$scope.$on('youtube.player.ended', function ($event, player) {
		    bestPlayer = '';
		});

	}
})();
