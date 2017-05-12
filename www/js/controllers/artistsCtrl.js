angular.module('meapp.controllers.artistsCtrl', [])
	.controller('artistsCtrl', ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', function($scope, dataFactory, artistFactory, loaderFactory) {

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

	var user_id = window.localStorage.getItem('userID');
	$scope.getUserType = function(user_id) {
		if(user_id) {
			dataFactory.getUserDetails(user_id).then(function(resp) {
				var userDetails = JSON.parse(resp.data.user_details);
				console.log(userDetails.user_type);
				return userDetails.user_type;
			});
		}
	};
	var user_type = $scope.getUserType(user_id);
	
	console.log(user_type);
	$scope.artist = {
		user_id: user_id,
		user_type: user_type,
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

	$scope.uploadFile = function(files) {
		var fd = new FormData();
		fd.append("file", files[0]);

		artistFactory.imageUpload(fd).then(function(resp) {
			console.log(resp);
		});
	};

	$scope.saveArtistDetails = function() {
		//loaderFactory.showLoader();
		console.log($scope.artist);
		// artistFactory.saveArtistDetails(artist).then(function(rep) {
		// 	loaderFactory.hideLoader();
		// 	console.log(JSON.parse(rep.data));
		// });
	}

}]);
