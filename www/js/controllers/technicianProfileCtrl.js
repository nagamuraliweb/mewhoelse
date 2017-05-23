angular.module('meapp.controllers.technicianProfileCtrl', [])
	.controller('technicianProfileCtrl', ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$stateParams', '$state', function($scope, dataFactory, artistFactory, loaderFactory, $stateParams, $state) {

	if($stateParams.user_id === '') {
		$state.go('landing');
		return;
	}

	dataFactory.getUserDetails($stateParams.user_id).then(function(resp) {
		$scope.artist = JSON.parse(resp.data.user_details);
		console.log($scope.artist);
	});
	console.log($stateParams.user_id);
	// get user type using user id
	if ($stateParams.user_id === 1) {
		$scope.usertype = 'Artist';
	} else if($stateParams.user_id === 2) {
		$scope.usertype = 'Technician';
	} else if($stateParams.user_id === 3) {
		$scope.usertype = 'Client';
	}

	console.log($scope.usertype);

}]);
