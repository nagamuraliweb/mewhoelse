(function() {
    'use strict';

	angular.module('meapp.controllers.clientProfileCtrl', [])
	.controller('clientProfileCtrl', clientProfileCtrl);

	clientProfileCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state'];

	function clientProfileCtrl($scope, dataFactory, artistFactory, loaderFactory, $state) {
		
		if(!window.localStorage.getItem('userID')) {
			$state.go('landing');
			return;
		}

		$scope.user_id = window.localStorage.getItem('userID');
		$scope.version = new Date().getTime();

		dataFactory.getUserDetails($scope.user_id).then(function(resp) {
			$scope.client = JSON.parse(resp.data.user_details);
			console.log($scope.client);
		});

		dataFactory.getBody().then(function(resp) {
			$scope.bodies = JSON.parse(resp.data.bodies);
			for(var i = 0; i < $scope.bodies.length; i++) {
				if($scope.bodies[i].id_body === $scope.client.user_body_id) {
					$scope.body = $scope.bodies[i].type;
				}
			}
		});

		dataFactory.getProjects().then(function(resp) {
			$scope.projects = JSON.parse(resp.data.projects);
			for(var i = 0; i < $scope.projects.length; i++) {
				if($scope.projects[i].id_project === $scope.client.user_project_id) {
					$scope.project = $scope.projects[i].type;
				}
			}
		});

		dataFactory.getRoles().then(function(resp) {
			$scope.roles = JSON.parse(resp.data.roles);
			for(var i = 0; i < $scope.roles.length; i++) {
				if($scope.roles[i].id_role === $scope.client.user_role_id) {
					$scope.role = $scope.roles[i].type;
				}
			}
		});

		dataFactory.getType().then(function(resp) {
			$scope.profession_types = JSON.parse(resp.data.types);
			for(var i = 0; i < $scope.profession_types.length; i++) {
				if($scope.profession_types[i].id_type === $scope.client.user_type) {
					$scope.profession = $scope.profession_types[i].type;
				}
			}
		});

		dataFactory.getGender().then(function(resp) {
			$scope.genders = JSON.parse(resp.data.genders);
			for(var i = 0; i < $scope.genders.length; i++) {
				if($scope.genders[i].id_gender === $scope.client.user_gender_id) {
					$scope.gender = $scope.genders[i].type;
				}
			}
		});

		dataFactory.getGender().then(function(resp) {
			$scope.genders1 = JSON.parse(resp.data.genders);
			for(var i = 0; i < $scope.genders1.length; i++) {
				if($scope.genders1[i].id_gender === $scope.client.user_looking_for) {
					$scope.looking = $scope.genders1[i].type;
				}
			}
		});

		dataFactory.getExperience().then(function(resp) {
			$scope.experience = JSON.parse(resp.data.experiences);
			for(var i = 0; i < $scope.experience.length; i++) {
				if($scope.experience[i].id_experience === $scope.client.user_experience_id) {
					$scope.exp = $scope.experience[i].type;
				}
			}
		});

		dataFactory.getLanguages().then(function(resp) {
			$scope.languages = JSON.parse(resp.data.languages);
			for(var i = 0; i < $scope.languages.length; i++) {
				if($scope.languages[i].id_language === $scope.client.user_language_id) {
					$scope.lang = $scope.languages[i].type;
				}
			}
		});

	}
})();
