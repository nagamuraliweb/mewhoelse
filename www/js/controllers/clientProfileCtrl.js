angular.module('meapp.controllers.clientProfileCtrl', [])
	.controller('clientProfileCtrl', ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$stateParams', '$state', function($scope, dataFactory, artistFactory, loaderFactory, $stateParams, $state) {

	if($stateParams.user_id === '') {
		$state.go('landing');
		return;
	}

	$scope.user_id = $stateParams.user_id;
	dataFactory.getUserDetails($stateParams.user_id).then(function(resp) {
		$scope.client = JSON.parse(resp.data.user_details);
		console.log($scope.client);
	});

	dataFactory.getType().then(function(resp) {
		$scope.profession_types = JSON.parse(resp.data.types);
		for(var i = 0; i < $scope.profession_types.length; i++) {
			if($scope.profession_types[i].id_type === $scope.client.user_type) {
				$scope.profession = $scope.profession_types[i].type;
			}
		}
	});

	dataFactory.getGender().then(function(resp) {
		$scope.genders = JSON.parse(resp.data.genders);
		for(var i = 0; i < $scope.genders.length; i++) {
			if($scope.genders[i].id_gender === $scope.client.user_gender_id) {
				$scope.gender = $scope.genders[i].type;
			}
		}
	});

	dataFactory.getExperience().then(function(resp) {
		$scope.experience = JSON.parse(resp.data.experiences);
		for(var i = 0; i < $scope.experience.length; i++) {
			if($scope.experience[i].id_experience === $scope.client.user_experience_id) {
				$scope.exp = $scope.experience[i].type;
			}
		}
	});

	dataFactory.getLanguages().then(function(resp) {
		$scope.languages = JSON.parse(resp.data.languages);
		for(var i = 0; i < $scope.languages.length; i++) {
			if($scope.languages[i].id_language === $scope.client.user_language_id) {
				$scope.lang = $scope.languages[i].type;
			}
		}
	});

	$scope.updateDetails = function() {
		$state.go('client-update', {user_id: $stateParams.user_id});
	}

}]);
