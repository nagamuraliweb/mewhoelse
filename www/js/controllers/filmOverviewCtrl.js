(function() {
    'use strict';

	angular.module('meapp.controllers.filmOverviewCtrl', [])
	.controller('filmOverviewCtrl', filmOverviewCtrl);

	filmOverviewCtrl.$inject = ['dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant', '$stateParams'];

	function filmOverviewCtrl(dataFactory, artistFactory, loaderFactory, $state, coreConstant, $stateParams) {

		var vm = this;
		var languages = [];

		dataFactory.getUserDetails($stateParams['id']).then(function(resp) {
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
