(function() {
    'use strict';
	angular.module('meapp.controllers.artistUpdateCtrl', [])
		.controller('artistUpdateCtrl', artistUpdateCtrl);

	artistUpdateCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant', '$sce'];

	function artistUpdateCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant, $sce) {

		var bestPlayer = null;
		var vm = this;
		var user_id = window.localStorage.getItem('userID');

		dataFactory.hasRegistered(user_id).then(function(resp) {
			if(!resp.data.has_registered) {
				$state.go('artist-register');
			}
		});

		vm.form = {};
		vm.showSkills = vm.showBodies = vm.showHairType = true;
		vm.showSkins = vm.showHaircolors = vm.showLanguages = true;
		vm.selectedSkills = vm.selectedLanguages = [];

		vm.skills = coreConstant.skills;
		vm.bodies = coreConstant.bodies;
		vm.experience = coreConstant.experience;
		vm.hairs = coreConstant.hairs;
		vm.haircolors = coreConstant.hairColors;
		vm.skins = coreConstant.skins;
		vm.genders = coreConstant.genders;
		vm.languages = coreConstant.languages;

		dataFactory.getUserDetails(user_id).then(function(resp) {
			var artist_data = JSON.parse(resp.data.user_details);

			vm.artist = {
				user_id: user_id,
				gender: artist_data.user_gender_id,
				dob: new Date(artist_data.user_dob),
				videos: artist_data.user_videos,
				skills: artist_data.user_skills_id,
				otherskills: artist_data.user_skills_others,
				experince: artist_data.user_experience_id,
				city: artist_data.user_city,
				other_ethnicity: artist_data.user_ethinicity,
				body_type: artist_data.user_body_id,
				hair_type: artist_data.user_hair_id,
				others_hairtype: artist_data.user_hair_others,
				weight: parseInt(artist_data.user_weight),
				skin_color: artist_data.user_skin_id,
				hair_color: artist_data.user_hair_color_id,
				training: artist_data.user_is_professional,
				languages: artist_data.user_language_id,
				others_languages: artist_data.user_language_others,
				video_name: artist_data.video_name
			};

			angular.forEach(artist_data.user_skills_id.split(','), function(key) {
				vm.selectedSkills[key] = true;
			});

			angular.forEach(artist_data.user_language_id.split(','), function(key) {
				vm.selectedLanguages[key] = true;
			});

			vm.selectedBodies = artist_data.user_body_id;
			vm.selectedHairs = artist_data.user_hair_id;
			vm.selectedSkins = artist_data.user_skin_id;
			vm.selectHairColors = artist_data.user_hair_color_id;

			$('#gender').val(artist_data.user_gender_id);
			$('#experience').val(artist_data.user_experience_id);
			$('#training').val(artist_data.user_is_professional);

			jQuery(function ($){
				$(".segment-select").Segment();
			});
		});

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
						vm.artist.front_img = resp.data.img_name;
					} else if (selector === 'sideview') {
						vm.artist.side_img = resp.data.img_name;
					} else {
						vm.artist.full_img = resp.data.img_name;
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
			
			dataFactory.deleteVideo(user_id).then(function(resp) {
				if(resp.data.error === 1) {
					loaderFactory.showAlert(resp.data.msg);
					return;
				} else {
					vm.artist.video_name = '';
				}
			});
		}

		vm.upload_video = function(src) {
			return $sce.trustAsResourceUrl(src);
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

		vm.updateArtistDetails = function() {

			 if(!validate())
			 	return;

			var filterSkills = [];
			var languages = [];
			angular.forEach(vm.selectedSkills, function(key, value) {
				if (key)
					filterSkills.push(value);
			});

			angular.forEach(vm.selectedLanguages, function(key, value) {
				if (key)
					languages.push(value);
			});

			vm.artist.skills = Object.values(filterSkills).join(',');
			vm.artist.languages = Object.keys(languages).join(',');
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
					loaderFactory.showAlert('Updation Failed', resp.data.msg);
					return;
				} else {
					loaderFactory.showAlert('Updation Successful', resp.data.msg);
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

		$scope.$on('youtube.player.playing', function ($event, player) {
		    bestPlayer = player;
		});

		$scope.$on('youtube.player.ended', function ($event, player) {
		    bestPlayer = '';
		});
	}
})();
