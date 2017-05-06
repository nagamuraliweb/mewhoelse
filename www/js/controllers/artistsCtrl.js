angular.module('meapp.controllers.artistsCtrl', [])
	.controller('artistsCtrl', ['$scope', 'dataFactory', function($scope, dataFactory) {

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

}]);
