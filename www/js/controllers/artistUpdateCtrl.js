(function() {
    'use strict';
	angular.module('meapp.controllers.artistUpdateCtrl', [])
		.controller('artistUpdateCtrl', artistUpdateCtrl);

	artistUpdateCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant'];

	function artistUpdateCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant) {

		var vm = this;
		var user_id = window.localStorage.getItem('userID');

		vm.form = {};
		vm.showSkills = vm.showBodies = vm.showHairType = true;
		vm.showSkins = vm.showHaircolors = vm.showLanguages = true;

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
				others_languages: artist_data.user_language_others
			};

			$('#gender').val(artist_data.user_gender_id);
			$('#experience').val(artist_data.user_experience_id);
			$('#training').val(artist_data.user_is_professional);
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
				}
			});
		};

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

		vm.updateArtistDetails = function() {
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
	}
})();
