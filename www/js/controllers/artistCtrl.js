angular.module('meapp.controllers.artistCtrl', [])
	.controller('artistCtrl', ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', '$filter', function($scope, dataFactory, artistFactory, loaderFactory, $state, $filter) {

	$scope.form = {};

	dataFactory.getBody().then(function(resp) {
		$scope.bodies = JSON.parse(resp.data.bodies);
	});

	dataFactory.getExperience().then(function(resp) {
		$scope.experience = JSON.parse(resp.data.experiences);
	});

	dataFactory.getHairs().then(function(resp) {
		$scope.hairs = JSON.parse(resp.data.hairs);
	});

	dataFactory.getHairColors().then(function(resp) {
		$scope.haircolors = JSON.parse(resp.data.hairColors);
	});

	dataFactory.getLanguages().then(function(resp) {
		$scope.languages = JSON.parse(resp.data.languages);
	});

	dataFactory.getSkills().then(function(resp) {
		$scope.skills = JSON.parse(resp.data.skills);
	});

	dataFactory.getSkins().then(function(resp) {
		$scope.skins = JSON.parse(resp.data.skins);
	});

	dataFactory.getGender().then(function(resp) {
		$scope.genders = JSON.parse(resp.data.genders);
	});

	$scope.artist = {
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
		others_languages: '',
		img_name: ''
	};

	$scope.artist.user_id = window.localStorage.getItem('userID');

	$scope.uploadFile = function(files) {
		var fd = new FormData();
		fd.append("file", files[0]);
		loaderFactory.showLoader();
		artistFactory.imageUpload(fd).then(function(resp) {
			$scope.artist.img_name = resp.data.img_name;
			loaderFactory.hideLoader();
		});
	};

	$scope.saveArtistDetails = function() {
		loaderFactory.showLoader();
		 artistFactory.saveArtistDetails($scope.artist).then(function(resp) {
		 	loaderFactory.hideLoader();
		 	if(resp.data.error === 1) {
				loaderFactory.showAlert('Registeration Failed', resp.data.msg);
				return;
			} else {
				loaderFactory.showAlert('Registeration Successful', resp.data.msg);
				$state.go('artist-profile', {user_id: $scope.artist.user_id})
			}
		 });
	}

}]);
