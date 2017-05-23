angular.module('meapp.controllers.clientUpdateCtrl', [])
	.controller('clientUpdateCtrl', ['$scope', 'dataFactory', function($scope, dataFactory) {

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

	$scope.form = {};

	$scope.client = {
		user_id: '',
		gender: '',
		project: '',
		projectname: '',
		project_type: '',
		project_description: '',
		roll_type: '',
		looking_for: '',
		character_name: '',
		character_description:'',
		body_type: '',
		experince: '',
		training: '',
		languages: '',
		others_languages: '',
		production_housename: ''
	};

	$scope.client.user_id = window.localStorage.getItem('userID');

	$scope.saveClientDetails = function() {
		loaderFactory.showLoader();
		console.log($scope.client);
		artistFactory.saveClientDetails($scope.client).then(function(rep) {
			loaderFactory.hideLoader();
			console.log(rep.data);
		});
	}

}]);
