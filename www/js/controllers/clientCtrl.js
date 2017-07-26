(function() {
    'use strict';

	angular.module('meapp.controllers.clientCtrl', [])
		.controller('clientCtrl', clientCtrl);

	clientCtrl.$inject = ['dataFactory', 'loaderFactory', 'artistFactory', '$state', '$scope', 'coreConstant'];

	function clientCtrl(dataFactory, loaderFactory, artistFactory, $state, $scope, coreConstant) {

		var vm = this;

		vm.bodies = coreConstant.bodies;
		vm.experience = coreConstant.experience;
		vm.languages = coreConstant.languages;
		vm.projects = coreConstant.projectType;
		vm.roles = coreConstant.roles;
		vm.genders = coreConstant.genders;

		vm.form = {};

		vm.client = {
			user_id: window.localStorage.getItem('userID'),
			gender: '',
			project: '',
			projectname: '',
			project_type: '',
			project_description: '',
			roll_type: '',
			looking_for: '',
			character_name: '',
			character_description:'',
			body_type: '',
			experince: '',
			training: '',
			languages: '',
			others_languages: '',
			production_housename: ''
		};

		jQuery(function ($){
           $(".segment-select").Segment();
      	});

      	$('#dlist2').dropList({
			multiple	: true,
			selected	: '["Select"]'
		});

		$('#dlist3').dropList({
			multiple	: true,
			selected	: '["Select"]'
		});

		$('#dlist4').dropList({
			multiple	: true,
			selected	: '["Select"]'
		});

		$('#dlist5').dropList({
			multiple	: true,
			selected	: '["Select"]'
		});

		$('#dlist6').dropList({
			multiple	: true,
			selected	: '["Select"]'
		});

		$('#dlist7').dropList({
			multiple	: true,
			selected	: '["Select"]'
		});

		vm.saveClientDetails = function() {
			loaderFactory.showLoader();

			artistFactory.saveClientDetails(vm.client).then(function(resp) {
				loaderFactory.hideLoader();
				if(resp.data.error === 1) {
					loaderFactory.showAlert('Registeration Failed', resp.data.msg);
					return;
				} else {
					loaderFactory.showAlert('Registeration Successful', resp.data.msg);
					$state.go('client-profile')
				}
			});
		}
	}
})();
