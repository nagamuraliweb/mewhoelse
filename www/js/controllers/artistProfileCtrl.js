angular.module('meapp.controllers.artistProfileCtrl', [])
	.controller('artistProfileCtrl', ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$stateParams', '$state', function($scope, dataFactory, artistFactory, loaderFactory, $stateParams, $state) {

	if($stateParams.user_id === '') {
		$state.go('landing');
		return;
	}

	dataFactory.getUserDetails($stateParams.user_id).then(function(resp) {
		$scope.artist = JSON.parse(resp.data.user_details);
		console.log($scope.artist);
	});

}]);
