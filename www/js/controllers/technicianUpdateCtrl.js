(function() {
    'use strict';

	angular.module('meapp.controllers.technicianUpdateCtrl', [])
		.controller('technicianUpdateCtrl', technicianUpdateCtrl);

	technicianUpdateCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant', '$sce'];

	function technicianUpdateCtrl ($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant, $sce) {

		var vm = this;
		var user_id = window.localStorage.getItem('userID');

		dataFactory.hasRegistered(user_id).then(function(resp) {
			if(!resp.data.has_registered) {
				$state.go('technician-register');
			}
		});

		vm.form = {};
		vm.showLanguages = true;
		vm.selectedLanguages = [];

		vm.experience = coreConstant.experience;
		vm.languages = coreConstant.languages;
		vm.genders = coreConstant.genders;

		vm.listLanguages = function() {
			vm.showLanguages = (vm.showLanguages) ? false : true;
		}

		dataFactory.getUserDetails(user_id).then(function(resp) {
			var tech_data = JSON.parse(resp.data.user_details);

			vm.technician = {
				user_id: user_id,
				gender: tech_data.user_gender_id,
				dob: new Date(tech_data.user_dob),
				videos: tech_data.user_videos,
				skills: tech_data.user_skills_others,
				experince: tech_data.user_experience_id,
				city: tech_data.user_city,
				other_ethnicity: tech_data.user_ethinicity,
				training: tech_data.user_is_professional,
				languages: tech_data.user_language_id,
				others_languages: tech_data.user_language_others,
				video_name: tech_data.video_name
			};

			angular.forEach(tech_data.user_language_id.split(','), function(key) {
				vm.selectedLanguages[key] = true;
			});

			$('#gender').val(tech_data.user_gender_id);
			$('#experience').val(tech_data.user_experience_id);
			$('#training').val(tech_data.user_is_professional);

			jQuery(function ($){
				$(".segment-select").Segment();
			});
		});

		dataFactory.getProfiles(user_id).then(function(resp) {
			vm.profiles = JSON.parse(resp.data.images);
		});

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
					img.setAttribute('width', '100%');
					img.setAttribute('height', '200px');
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

			dataFactory.deleteVideo(user_id).then(function(resp) {
				if(resp.data.error === 1) {
					loaderFactory.showAlert(resp.data.msg);
					return;
				} else {
					vm.technician.video_name = '';
				}
			});
		}

		vm.upload_video = function(src) { console.log(src);
			return $sce.trustAsResourceUrl(src);
		}

		vm.deleteImg = function(selector, img) {
			dataFactory.deleteImg(user_id, img).then(function(resp) {
				if(resp.data.error === 1) {
					loaderFactory.showAlert(resp.data.msg);
					return;
				} else {
					$('#'+selector).find('img').remove();
					angular.element("input[id="+selector+"Field]").val(null);
					$('#'+selector+'Delete').hide();
				}
			});
		}

		vm.updateTechnicianDetails = function() {

			if(!validate())
			 	return;
				
			var languages = [];
			angular.forEach(vm.selectedLanguages, function(key, value) {
				if (key)
					languages.push(value);
			});

			vm.technician.languages = Object.keys(languages).join(',');
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
