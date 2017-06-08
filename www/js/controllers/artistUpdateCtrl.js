(function() {
    'use strict';
	angular.module('meapp.controllers.artistUpdateCtrl', [])
		.controller('artistUpdateCtrl', artistUpdateCtrl);

	artistUpdateCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state'];

	function artistUpdateCtrl($scope, dataFactory, artistFactory, loaderFactory, $state) {

		if(!window.localStorage.getItem('userID')) {
			$state.go('landing');
			return;
		}

		var vm = this;
		var user_id = window.localStorage.getItem('userID');

		vm.form = {};

		dataFactory.getBody().then(function(resp) {
			vm.bodies = JSON.parse(resp.data.bodies);
		});

		dataFactory.getExperience().then(function(resp) {
			vm.experience = JSON.parse(resp.data.experiences);
		});

		dataFactory.getHairs().then(function(resp) {
			vm.hairs = JSON.parse(resp.data.hairs);
		});

		dataFactory.getHairColors().then(function(resp) {
			vm.haircolors = JSON.parse(resp.data.hairColors);
		});

		dataFactory.getLanguages().then(function(resp) {
			vm.languages = JSON.parse(resp.data.languages);
		});

		dataFactory.getSkills().then(function(resp) {
			vm.skills = JSON.parse(resp.data.skills);
		});

		dataFactory.getSkins().then(function(resp) {
			vm.skins = JSON.parse(resp.data.skins);
		});

		dataFactory.getGender().then(function(resp) {
			vm.genders = JSON.parse(resp.data.genders);
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
				weight: artist_data.user_weight,
				skin_color: artist_data.user_skin_id,
				hair_color: artist_data.user_hair_color_id,
				training: artist_data.user_is_professional,
				languages: artist_data.user_language_id,
				others_languages: artist_data.user_language_others
			};
		});

		$scope.uploadFile = function(files) {
			var fd = new FormData();
			fd.append("file", files[0]);
			loaderFactory.showLoader();
			artistFactory.imageUpload(fd).then(function(resp) {
				vm.artist.img_name = resp.data.img_name;
				loaderFactory.hideLoader();
			});
		};

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
