(function() {
    'use strict';

	angular.module('meapp.controllers.technicianCtrl', [])
	.controller('technicianCtrl', technicianCtrl);

	technicianCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', '$stateParams', 'coreConstant'];

	function technicianCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, $stateParams, coreConstant) {

		var vm = this;
		vm.form = {};

		vm.experience = coreConstant.experience;
		vm.languages = coreConstant.languages;
		vm.genders = coreConstant.genders;

		vm.technician = {
			user_id: '',
			gender: '',
			dob: '',
			videos: '',
			skills: '',
			experince: '',
			city: '',
			other_ethnicity: '',
			training: '',
			languages: '',
			others_languages: ''
		};

		vm.technician.user_id = window.localStorage.getItem('userID');

		$scope.uploadFile = function(files) {
			var fd = new FormData();
			fd.append("file", files[0]);
			loaderFactory.showLoader();
			
			artistFactory.imageUpload(fd).then(function(resp) {
				loaderFactory.hideLoader();
				if(resp.data.error === 1) {
					loaderFactory.showAlert(resp.data.msg);
					return;
				} else {

					if (selector === 'frontview') {
						vm.technician.front_img = resp.data.img_name;
					} else if (selector === 'sideview') {
						vm.technician.side_img = resp.data.img_name;
					} else {
						vm.technician.full_img = resp.data.img_name;
					}

					$('#'+selector).empty();

					var img = document.createElement('img');
					img.setAttribute('src', 'http://mewhoelse.in/img/tmp/'+resp.data.img_name);
					img.setAttribute('width', '90px');
					img.setAttribute('height', '117px');
					document.getElementById(selector).appendChild(img);
				}
			});
		};

		/*jQuery(function ($){
           $(".segment-select").Segment();
      	});

      	$('#dlist2').dropList({
			multiple	: true,
			selected	: '["Select"]'
		});

		$('#dlist3').dropList({
			multiple	: true,
			selected	: '["Select"]'
		});*/

		vm.saveTechnicianDetails = function() {
			loaderFactory.showLoader();
			artistFactory.saveTechnicianDetails(vm.technician).then(function(resp) {
				loaderFactory.hideLoader();
				if(resp.data.error === 1) {
					loaderFactory.showAlert('Registeration Failed', resp.data.msg);
					return;
				} else {
					loaderFactory.showAlert('Registeration Successful', resp.data.msg);
					$state.go('technician-profile');
				}
			});
		}
	}
})();
