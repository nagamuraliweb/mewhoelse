angular.module('meapp.controllers.clientsCtrl', [])
	.controller('clientsCtrl', ['$scope', 'dataFactory', function($scope, dataFactory) {

	dataFactory.getBody().then(function(resp) {
		$scope.bodies = JSON.parse(resp.data.bodies);
	});

	dataFactory.getExperience().then(function(resp) {
		$scope.experience = JSON.parse(resp.data.experiences);
	});

	dataFactory.getLanguages().then(function(resp) {
		$scope.languages = JSON.parse(resp.data.languages);
	});

	dataFactory.getProjects().then(function(resp) {
		$scope.projects = JSON.parse(resp.data.projects);
	});

	dataFactory.getRoles().then(function(resp) {
		$scope.roles = JSON.parse(resp.data.roles);
	});

}]);
