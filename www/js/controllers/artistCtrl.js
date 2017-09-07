(function() {
    'use strict';

angular.module('meapp.controllers.artistCtrl', [])
	.controller('artistCtrl', artistCtrl);

	artistCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant'];

	function artistCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant) {

		var vm = this;
		var user_id = window.localStorage.getItem('userID');

		if (user_id) {
			dataFactory.hasRegistered(user_id).then(function(resp) {
				if(resp.data.has_registered) {
					$state.go('artist-profile');
				}
			});
		}

		vm.form = {};
		vm.showSkills = vm.showBodies = vm.showHairType = false;
		vm.showSkins = vm.showHaircolors = vm.showLanguages = false;

		vm.skills = coreConstant.skills;
		vm.bodies = coreConstant.bodies;
		vm.experience = coreConstant.experience;
		vm.hairs = coreConstant.hairs;
		vm.haircolors = coreConstant.hairColors;
		vm.skins = coreConstant.skins;
		vm.genders = coreConstant.genders;
		vm.languages = coreConstant.languages;

		jQuery(function ($){
           $(".segment-select").Segment();
      	});

		vm.artist = {
			user_id: user_id,
			gender: '',
			dob: '',
			videos: '',
			skills: '',
			otherskills: '',
			experince: '',
			city: '',
			other_ethnicity: '',
			body_type:'',
			hair_type: '',
			others_hairtype: '',
			weight: '',
			skin_color: '',
			hair_color: '',
			training: '',
			languages: '',
			others_languages: '',
			video_name: ''
		};

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
						vm.artist.front_img = resp.data.img_name;
						$('#frontviewDelete').show();
					} else if (selector === 'sideview') {
						vm.artist.side_img = resp.data.img_name;
						$('#sideviewDelete').show();
					} else {
						vm.artist.full_img = resp.data.img_name;
						$('#fullviewDelete').show();
					}

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
					vm.artist.video_name = resp.data.video_name;

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

			vm.artist.video_name = '';
		}

		vm.listSkills = function() {
			vm.showSkills = (vm.showSkills) ? false : true;
		}

		vm.listBodies = function() {
			vm.showBodies = (vm.showBodies) ? false : true;
		}

		vm.listHairType = function() {
			vm.showHairType = (vm.showHairType) ? false : true;
		}

		vm.listLanguages = function() {
			vm.showLanguages = (vm.showLanguages) ? false : true;
		}

		vm.listSkins = function() {
			vm.showSkins = (vm.showSkins) ? false : true;
		}

		vm.listHaircolors = function() {
			vm.showHaircolors = (vm.showHaircolors) ? false : true;
		}

		vm.deleteImg = function(selector) {
			$('#'+selector).find('img').remove();
			angular.element("input[id="+selector+"Field]").val(null);
			$('#'+selector+'Delete').hide();
		}

		vm.saveArtistDetails = function() {

			if(!validate())
				return;

			vm.artist.skills = Object.keys(vm.selectedSkills).join(',');
			vm.artist.languages = Object.keys(vm.selectedLanguages).join(',');
			vm.artist.body_type = vm.selectedBodies;
			vm.artist.hair_type = vm.selectedHairs;
			vm.artist.skin_color = vm.selectedSkins;
			vm.artist.hair_color = vm.selectHairColors;
			vm.artist.gender = $('#gender').val();
			vm.artist.experince = $('#experience').val();
			vm.artist.training = $('#training').val();

			loaderFactory.showLoader();

			 artistFactory.saveArtistDetails(vm.artist).then(function(resp) {
			 	loaderFactory.hideLoader();
			 	if(resp.data.error === 1) {
					loaderFactory.showAlert('Registeration Failed', resp.data.msg);
					return;
				} else {
					loaderFactory.showAlert('Registeration Successful', resp.data.msg);
					$state.go('artist-profile')
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

				if(typeof vm.selectedSkills === 'undefined')
					throw "Choose skills";

				if (!vm.artist.dob || typeof vm.artist.dob === 'undefined')
					throw "Choose DOB";
				
				if (!vm.selectedBodies)
					throw "Choose Body Type";
				
				if (!vm.selectedHairs)
					throw "Choose Hair Type";

				if (!vm.artist.weight)
					throw "Enter Weight";

				if (!vm.selectedLanguages)
					throw "Choose Languages";
				
				if (!vm.artist.city)
					throw "Enter City";

				if (!vm.artist.other_ethnicity)
					throw "Enter Ethnicity";
				
				if (!vm.selectedSkins)
					throw "Choose Skin Colour";

				if (!vm.selectHairColors)
					throw "Choose Hair Colour";

			} catch(e) {
				loaderFactory.showAlert(e);
				return false;
			}

			return true;
		}
	}
})();
