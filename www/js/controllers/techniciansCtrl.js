angular.module('meapp.controllers.techniciansCtrl', [])
	.controller('techniciansCtrl', ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', function($scope, dataFactory, artistFactory, loaderFactory) {

	dataFactory.getExperience().then(function(resp) {
		$scope.experience = JSON.parse(resp.data.experiences);
	});

	dataFactory.getLanguages().then(function(resp) {
		$scope.languages = JSON.parse(resp.data.languages);
	});

	$scope.form = {};
	var img_name;
	$scope.technician = {
		user_id: user_id,
		user_type: user_type,
		gender: '',
		dob: '',
		videos: '',
		skills: '',
		experince: '',
		city: '',
		other_ethnicity: '',
		training: '',
		languages: '',
		others_languages: '',
		img_name: img_name
	};

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

	$scope.uploadFile = function(files) {
		var fd = new FormData();
		fd.append("file", files[0]);

		artistFactory.imageUpload(fd).then(function(resp) {
			img_name = resp;
			console.log(resp);
		});
	};

	$scope.saveTechnicianDetails = function() {
		//loaderFactory.showLoader();
		console.log($scope.technician);
		// artistFactory.saveTechnicianDetails(technician).then(function(rep) {
		// 	loaderFactory.hideLoader();
		// 	console.log(JSON.parse(rep.data));
		// });
	}


}]);
