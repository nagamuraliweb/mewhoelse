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

	$scope.form = {};

	$scope.client = {
		user_id: user_id,
		user_type: user_type,
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

	$scope.saveClientDetails = function() {
		//loaderFactory.showLoader();
		console.log($scope.artist);
		// artistFactory.saveClientDetails(client).then(function(rep) {
		// 	loaderFactory.hideLoader();
		// 	console.log(JSON.parse(rep.data));
		// });
	}

}]);
