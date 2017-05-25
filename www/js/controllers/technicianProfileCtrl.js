angular.module('meapp.controllers.technicianProfileCtrl', [])
	.controller('technicianProfileCtrl', ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$stateParams', '$state', function($scope, dataFactory, artistFactory, loaderFactory, $stateParams, $state) {

	if($stateParams.user_id === '') {
		$state.go('landing');
		return;
	}

	dataFactory.getUserDetails($stateParams.user_id).then(function(resp) {
		$scope.technician = JSON.parse(resp.data.user_details);
		console.log($scope.technician);
	});

	dataFactory.getType().then(function(resp) {
		$scope.profession_types = JSON.parse(resp.data.types);
		console.log($scope.profession_types);
		$scope.profession = $scope.profession_types[$scope.technician.user_type].type;
	});

	dataFactory.getExperience().then(function(resp) {
		$scope.experience = JSON.parse(resp.data.experiences);
		$scope.exp = $scope.experience[$scope.technician.user_experience_id].type;
	});

	dataFactory.getLanguages().then(function(resp) {
		$scope.languages = JSON.parse(resp.data.languages);
		console.log($scope.languages);
		$scope.lang = $scope.languages[$scope.technician.user_language_id].type;
	});

	dataFactory.getGender().then(function(resp) {
		$scope.genders = JSON.parse(resp.data.genders);
		console.log($scope.genders);
		$scope.gender = $scope.genders[$scope.technician.user_gender_id].type;
	});

	$scope.$on('youtube.player.playing', function ($event, player) {
	    bestPlayer = player;
	});

	$scope.$on('youtube.player.ended', function ($event, player) {
	    bestPlayer = '';
	});
	
	$scope.updateDetails = function() {
		$state.go('technician-update', {user_id: $stateParams.user_id});
	}
	
}]);
