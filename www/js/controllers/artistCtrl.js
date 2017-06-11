(function() {
    'use strict';

angular.module('meapp.controllers.artistCtrl', [])
	.controller('artistCtrl', artistCtrl);

	artistCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state'];

	function artistCtrl($scope, dataFactory, artistFactory, loaderFactory, $state) {

		var vm = this;
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

		vm.artist = {
			user_id: '',
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
			others_languages: ''
		};

		vm.artist.user_id = window.localStorage.getItem('userID');

		$scope.uploadFile = function(files) {
			var fd = new FormData();
			fd.append("file", files[0]);
			loaderFactory.showLoader();
			artistFactory.imageUpload(fd).then(function(resp) {
				vm.artist.img_name = resp.data.img_name;
				loaderFactory.hideLoader();
			});
		};

		// vm.appendClonedDiv = function() {
		//     var pID = angular.element(document.querySelector('#parentID'));
		//     var cID = angular.element(document.querySelector('#childID'));
		//     cID.append(pID.clone());
	 //    }
	 	$scope.showSecond = false;
	 	$scope.showThird = false;

	 	vm.showSecondPhoto = function() {
	 		$scope.showSecond = true;
	 	}

	 	vm.showThirdPhoto = function() {
	 		$scope.showThird = true;
	 	}

		vm.saveArtistDetails = function() {
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

	}
})();
