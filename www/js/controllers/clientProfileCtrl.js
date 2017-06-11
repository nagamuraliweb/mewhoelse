(function() {
    'use strict';

	angular.module('meapp.controllers.clientProfileCtrl', [])
	.controller('clientProfileCtrl', clientProfileCtrl);

	clientProfileCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state'];

	function clientProfileCtrl($scope, dataFactory, artistFactory, loaderFactory, $state) {

		var vm = this;
		$scope.user_id = window.localStorage.getItem('userID');
		$scope.version = new Date().getTime();

		dataFactory.getUserDetails($scope.user_id).then(function(resp) {
			vm.client = JSON.parse(resp.data.user_details);
		});

		dataFactory.getBody().then(function(resp) {
			var bodies = JSON.parse(resp.data.bodies);
			vm.body = bodies[vm.client.user_body_id];
		});

		dataFactory.getProjects().then(function(resp) {
			var projects = JSON.parse(resp.data.projects);
			vm.project = projects[vm.client.user_project_id];
		});

		dataFactory.getRoles().then(function(resp) {
			var roles = JSON.parse(resp.data.roles);
			vm.role = roles[vm.client.user_role_id];
		});

		dataFactory.getType().then(function(resp) {
			var profession_types = JSON.parse(resp.data.types);
			vm.profession = profession_types[vm.client.user_type];
		});

		dataFactory.getGender().then(function(resp) {
			var genders = JSON.parse(resp.data.genders);
			vm.gender = genders[vm.client.user_gender_id];
		});

		dataFactory.getGender().then(function(resp) {
			var genders1 = JSON.parse(resp.data.genders);
			vm.looking = genders1[vm.client.user_looking_for];
		});

		dataFactory.getExperience().then(function(resp) {
			var experience = JSON.parse(resp.data.experiences);
			vm.exp = experience[vm.client.user_experience_id];
		});

		dataFactory.getLanguages().then(function(resp) {
			var languages = JSON.parse(resp.data.languages);
			vm.lang = languages[vm.client.user_language_id];
		});

	}
})();
