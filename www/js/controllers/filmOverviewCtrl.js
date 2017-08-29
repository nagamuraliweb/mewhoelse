(function() {
    'use strict';

	angular.module('meapp.controllers.filmOverviewCtrl', [])
	.controller('filmOverviewCtrl', filmOverviewCtrl);

	filmOverviewCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant'];

	function filmOverviewCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant) {

		var vm = this;
		var languages = [];

		$scope.user_id = window.localStorage.getItem('userID');
		$scope.version = new Date().getTime();

		dataFactory.getUserDetails($scope.user_id).then(function(resp) {
			vm.client = JSON.parse(resp.data.user_details);

			vm.body = coreConstant.bodies[vm.client.user_body_id];
			vm.project = coreConstant.projectType[vm.client.user_project_id];
			vm.role = coreConstant.roles[vm.client.user_role_id];
			vm.profession = coreConstant.type[vm.client.user_type];
			vm.looking = coreConstant.genders[vm.client.user_looking_for];
			vm.exp = coreConstant.experience[vm.client.user_experience_id];
			vm.lang = coreConstant.languages[vm.client.user_language_id];

			angular.forEach(vm.client.user_language_id.split(','), function(key) {
				languages.push(coreConstant.languages[key]);
			});

			if(vm.client.user_language_others)
				languages.push(vm.client.user_language_others);

			vm.lang = languages.join(', ');
		});
	}
})();
