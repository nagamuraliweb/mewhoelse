angular.module('meapp.controllers.artistProfileCtrl', ['youtube-embed'])
	.controller('artistProfileCtrl', ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$stateParams', '$state', function($scope, dataFactory, artistFactory, loaderFactory, $stateParams, $state) {

	var bestPlayer = null;

	if($stateParams.user_id === '') {
		$state.go('landing');
		return;
	}

	dataFactory.getUserDetails($stateParams.user_id).then(function(resp) {
		$scope.artist = JSON.parse(resp.data.user_details);
		console.log($scope.artist);
	});

	dataFactory.getType().then(function(resp) {
		$scope.profession_types = JSON.parse(resp.data.types);
		$scope.profession = $scope.profession_types[$scope.artist.user_type].type;
	});

	dataFactory.getBody().then(function(resp) {
		$scope.bodies = JSON.parse(resp.data.bodies);
		$scope.body = $scope.bodies[$scope.artist.user_body_id].type;
	});

	dataFactory.getExperience().then(function(resp) {
		$scope.experience = JSON.parse(resp.data.experiences);
		$scope.exp = $scope.experience[$scope.artist.user_experience_id].type;
	});

	dataFactory.getHairs().then(function(resp) {
		$scope.hairs = JSON.parse(resp.data.hairs);
		$scope.hair = $scope.hairs[$scope.artist.user_hair_id].type;
	});

	dataFactory.getHairColors().then(function(resp) {
		$scope.haircolors = JSON.parse(resp.data.hairColors);
		$scope.haircolor = $scope.haircolors[$scope.artist.user_hair_color_id].type;
	});

	dataFactory.getLanguages().then(function(resp) {
		$scope.languages = JSON.parse(resp.data.languages);
		$scope.lang = $scope.languages[$scope.artist.user_language_id].type;
	});

	dataFactory.getSkills().then(function(resp) {
		$scope.skills = JSON.parse(resp.data.skills);
		$scope.skill = $scope.skills[$scope.artist.user_skills_id].type;
	});

	dataFactory.getSkins().then(function(resp) {
		$scope.skins = JSON.parse(resp.data.skins);
		$scope.skin = $scope.skins[$scope.artist.user_skin_id].type;
	});

	dataFactory.getGender().then(function(resp) {
		$scope.genders = JSON.parse(resp.data.genders);
		console.log($scope.genders);
		$scope.gender = $scope.genders[$scope.artist.user_gender_id].type;
	});

	$scope.$on('youtube.player.playing', function ($event, player) {
	    bestPlayer = player;
	});

	$scope.$on('youtube.player.ended', function ($event, player) {
	    bestPlayer = '';
	});
	

}]);
