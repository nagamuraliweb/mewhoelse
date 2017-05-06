angular.module('meapp.controllers.techniciansCtrl', [])
	.controller('techniciansCtrl', ['$scope', 'dataFactory', function($scope, dataFactory) {

	dataFactory.getExperience().then(function(resp) {
		$scope.experience = JSON.parse(resp.data.experiences);
	});

	dataFactory.getLanguages().then(function(resp) {
		$scope.languages = JSON.parse(resp.data.languages);
	});

}]);
