angular.module('meapp.controllers.technicianCtrl', [])
	.controller('technicianCtrl', ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', '$stateParams', function($scope, dataFactory, artistFactory, loaderFactory, $state, $stateParams) {

	dataFactory.getExperience().then(function(resp) {
		$scope.experience = JSON.parse(resp.data.experiences);
	});

	dataFactory.getLanguages().then(function(resp) {
		$scope.languages = JSON.parse(resp.data.languages);
	});

	dataFactory.getGender().then(function(resp) {
		$scope.genders = JSON.parse(resp.data.genders);
	});

	$scope.form = {};

	$scope.technician = {
		user_id: '',
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
		img_name: ''
	};

	$scope.technician.user_id = window.localStorage.getItem('userID');

	$scope.uploadFile = function(files) {
		var fd = new FormData();
		fd.append("file", files[0]);
		loaderFactory.showLoader();
		artistFactory.imageUpload(fd).then(function(resp) {
			loaderFactory.hideLoader();
			$scope.technician.img_name = resp.data.img_name;
		});
	};

	$scope.saveTechnicianDetails = function() {
		loaderFactory.showLoader();
		artistFactory.saveTechnicianDetails($scope.technician).then(function(resp) {
			loaderFactory.hideLoader();
			console.log(resp);
		 	if(resp.data.error === 1) {
				loaderFactory.showAlert('Registeration Failed', resp.data.msg);
				return;
			} else {
				loaderFactory.showAlert('Registeration Successful', resp.data.msg);
				$state.go('technician-profile', {user_id: $scope.technician.user_id});
			}
		});
	}


}]);
