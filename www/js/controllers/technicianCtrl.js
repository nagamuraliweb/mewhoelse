(function() {
    'use strict';

	angular.module('meapp.controllers.technicianCtrl', [])
	.controller('technicianCtrl', technicianCtrl);

	technicianCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', '$stateParams', 'coreConstant', '$sce'];

	function technicianCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, $stateParams, coreConstant, $sce) {

		dataFactory.hasRegistered().then(function(resp) {
			if(resp.data.has_registered) {
				$state.go('technician-profile');
			}
		});

		var vm = this;
		vm.form = {};
		vm.showLanguages = false;

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
			others_languages: '',
			video_name: ''
		};

		vm.technician.user_id = window.localStorage.getItem('userID');

		vm.listLanguages = function() {
			vm.showLanguages = (vm.showLanguages) ? false : true;
		}

		$scope.uploadFile = function(files, selector) {
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
						$('#frontviewDelete').show();
					} else if (selector === 'sideview') {
						vm.technician.side_img = resp.data.img_name;
						$('#sideviewDelete').show();
					} else {
						vm.technician.full_img = resp.data.img_name;
						$('#fullviewDelete').show();
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

		$scope.uploadVideo = function(files) {
			var fd = new FormData();
			fd.append("file", files[0]);
			loaderFactory.showLoader();
			artistFactory.videoUpload(fd).then(function(resp) {
				loaderFactory.hideLoader();
				if(resp.data.error === 1) {
					loaderFactory.showAlert(resp.data.msg);
					return;
				} else {
					vm.technician.video_name = resp.data.video_name;

					$('#previewVideo').empty();
					var video = document.createElement('video');
					video.setAttribute('src', 'http://mewhoelse.in/video/tmp/'+resp.data.video_name);
					document.getElementById('previewVideo').appendChild(video);

					$('#previewVideoDelete').show();
				}
			});
		};

		vm.deleteVideo = function() {
			$('#previewVideo').find('video').remove();
			angular.element("input[id='videoFile']").val(null);
			$('#previewVideoDelete').hide();

			vm.technician.video_name = '';
		}

		jQuery(function ($){
           $(".segment-select").Segment();
      	});

		vm.upload_video = function(src) {
			return $sce.trustAsResourceUrl(src);
		}

		vm.deleteImg = function(selector) {
			$('#'+selector).find('img').remove();
			angular.element("input[id="+selector+"Field]").val(null);
			$('#'+selector+'Delete').hide();
		}

		vm.saveTechnicianDetails = function() {

			if(!validate())
			 	return;

			vm.technician.languages = Object.keys(vm.selectedLanguages).join(',');
			vm.technician.gender = $('#gender').val();
			vm.technician.experince = $('#experience').val();
			vm.technician.training = $('#training').val();

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

		function validate() {
			try {

				if ($('#frontview').find('img').length === 0)
					throw "Upload front view image";

				if ($('#sideview').find('img').length === 0)
					throw "Upload side view image";

				if ($('#fullview').find('img').length === 0)
					throw "Upload full view image";

				if(vm.technician.skills === '')
					throw "Enter skills";
				
				if (!vm.technician.dob || typeof vm.technician.dob === 'undefined')
					throw "Choose DOB";

				if (!vm.selectedLanguages)
					throw "Choose Languages";
				
				if (!vm.technician.city)
					throw "Enter City";

				if (!vm.technician.other_ethnicity)
					throw "Enter Ethnicity";

			} catch(e) {
				loaderFactory.showAlert(e);
				return false;
			}

			return true;
		}
	}
})();
