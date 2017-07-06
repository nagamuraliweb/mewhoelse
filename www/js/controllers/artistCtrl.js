(function() {
    'use strict';

angular.module('meapp.controllers.artistCtrl', [])
	.controller('artistCtrl', artistCtrl);

	artistCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant'];

	function artistCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant) {

		var vm = this;
		vm.form = {};

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

      	setTimeout(function() {
			$('#dlist2, #dlist3, #dlist4, #dlist5, #dlist6, #dlist7, #dlist8').dropList({
				multiple	: true,
				selected	: '["Select"]'
			});
		}, 500);

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
				loaderFactory.hideLoader();
				if(resp.data.error === 1) {
					loaderFactory.showAlert(resp.data.msg);
					return;
				} else {
					vm.artist.img_name = resp.data.img_name;
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
			console.log(vm.artist);
			 /*artistFactory.saveArtistDetails(vm.artist).then(function(resp) {
			 	loaderFactory.hideLoader();
			 	if(resp.data.error === 1) {
					loaderFactory.showAlert('Registeration Failed', resp.data.msg);
					return;
				} else {
					loaderFactory.showAlert('Registeration Successful', resp.data.msg);
					$state.go('artist-profile')
				}
			 });*/
		}

	}
})();
