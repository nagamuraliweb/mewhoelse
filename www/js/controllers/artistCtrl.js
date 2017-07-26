(function() {
    'use strict';

angular.module('meapp.controllers.artistCtrl', [])
	.controller('artistCtrl', artistCtrl);

	artistCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', 'coreConstant'];

	function artistCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, coreConstant) {

		var vm = this;
		vm.form = {};
		vm.showSkills = vm.showBodies = vm.showHairType = false;
		vm.showSkins = vm.showHaircolors = vm.showLanguages = false;
		vm.selectedSkills = {};

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
      	
		/*
      	setTimeout(function() {
			$('#dlist2, #dlist3, #dlist4, #dlist5, #dlist6, #dlist7, #dlist8').dropList({
				multiple	: true,
				selected	: '["Select"]'
			});
		}, 500);*/

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

		$('#bodies_list li').on('click', function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});

		vm.listHairType = function() {
			vm.showHairType = (vm.showHairType) ? false : true;
		}

		$('#hairs_list li').on('click', function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});

		vm.listLanguages = function() {
			vm.showLanguages = (vm.showLanguages) ? false : true;
		}

		$('#languages_list li').on('click', function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});

		vm.listSkins = function() {
			vm.showSkins = (vm.showSkins) ? false : true;
		}

		$('#skins_list li').on('click', function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});

		vm.listHaircolors = function() {
			vm.showHaircolors = (vm.showHaircolors) ? false : true;
		}

		$('#haircolors_list li').on('click', function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});

		vm.deleteImg = function(selector) {
			$('#'+selector).empty();
			$('#'+selector+'Delete').hide();
		}

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
			vm.artist.skills = JSON.stringify(Object.keys(vm.selectedSkills));
			vm.artist.languages = JSON.stringify(Object.keys(vm.selectedLanguages));
			vm.artist.body_type = JSON.stringify(Object.keys(vm.selectedBodies));
			vm.artist.hair_type = JSON.stringify(Object.keys(vm.selectedHairs));
			vm.artist.skin_color = JSON.stringify(Object.keys(vm.selectedSkins));
			vm.artist.hair_color = JSON.stringify(Object.keys(vm.selectHairColors));
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

	}
})();

// angular.element(document).ready(function() {
// 	$('#skills_list li').on('click', function() { console.log('click');
// 		if($(this).hasClass('active')) {
// 			$(this).removeClass('active');
// 		} else {
// 			$(this).addClass('active');
// 		}
// 	});

// 	$('.skills_list').on('click', function() { console.log('click');
// 		if($(this).hasClass('active')) {
// 			$(this).removeClass('active');
// 		} else {
// 			$(this).addClass('active');
// 		}
// 	});
// });
