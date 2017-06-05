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

		$scope.user_id = window.localStorage.getItem('userID');
		$scope.version = new Date().getTime();

		dataFactory.getUserDetails($scope.user_id).then(function(resp) {
			$scope.artist = JSON.parse(resp.data.user_details);
		});

		dataFactory.getType().then(function(resp) {
			$scope.profession_types = JSON.parse(resp.data.types);
			for(var i = 0; i < $scope.profession_types.length; i++) {
				if($scope.profession_types[i].id_type === $scope.artist.user_type) {
					$scope.profession = $scope.profession_types[i].type;
				}
			}
		});

		dataFactory.getBody().then(function(resp) {
			$scope.bodies = JSON.parse(resp.data.bodies);
			for(var i = 0; i < $scope.bodies.length; i++) {
				if($scope.bodies[i].id_body === $scope.artist.user_body_id) {
					$scope.body = $scope.bodies[i].type;
				}
			}
		});

		dataFactory.getExperience().then(function(resp) {
			$scope.experience = JSON.parse(resp.data.experiences);
			for(var i = 0; i < $scope.experience.length; i++) {
				if($scope.experience[i].id_experience === $scope.artist.user_experience_id) {
					$scope.exp = $scope.experience[i].type;
				}
			}
		});

		dataFactory.getHairs().then(function(resp) {
			$scope.hairs = JSON.parse(resp.data.hairs);
			for(var i = 0; i < $scope.hairs.length; i++) {
				if($scope.hairs[i].id_hair === $scope.artist.user_hair_id) {
					$scope.hair = $scope.hairs[i].type;
				}
			}
		});

		dataFactory.getHairColors().then(function(resp) {
			$scope.haircolors = JSON.parse(resp.data.hairColors);
			for(var i = 0; i < $scope.haircolors.length; i++) {
				if($scope.haircolors[i].id_hair === $scope.artist.user_hair_color_id) {
					$scope.haircolor = $scope.haircolors[i].type;
				}
			}
		});

		dataFactory.getLanguages().then(function(resp) {
			$scope.languages = JSON.parse(resp.data.languages);
			for(var i = 0; i < $scope.languages.length; i++) {
				if($scope.languages[i].id_language === $scope.artist.user_language_id) {
					$scope.lang = $scope.languages[i].type;
				}
			}
		});

		dataFactory.getSkills().then(function(resp) {
			$scope.skills = JSON.parse(resp.data.skills);
			for(var i = 0; i < $scope.skills.length; i++) {
				if($scope.skills[i].id_skills === $scope.artist.user_skills_id) {
					$scope.skill = $scope.skills[i].type;
				}
			}
		});

		dataFactory.getSkins().then(function(resp) {
			$scope.skins = JSON.parse(resp.data.skins);
			for(var i = 0; i < $scope.skins.length; i++) {
				if($scope.skins[i].id_skin === $scope.artist.user_skin_id) {
					$scope.skin = $scope.skins[i].type;
				}
			}
		});

		dataFactory.getGender().then(function(resp) {
			$scope.genders = JSON.parse(resp.data.genders);
			for(var i = 0; i < $scope.genders.length; i++) {
				if($scope.genders[i].id_gender === $scope.artist.user_gender_id) {
					$scope.gender = $scope.genders[i].type;
				}
			}
		});

		$scope.$on('youtube.player.playing', function ($event, player) {
		    bestPlayer = player;
		});

		$scope.$on('youtube.player.ended', function ($event, player) {
		    bestPlayer = '';
		});

	}
})();
