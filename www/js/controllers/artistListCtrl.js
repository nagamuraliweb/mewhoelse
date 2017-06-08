(function() {
    'use strict';

	angular.module('meapp.controllers.artistListCtrl', [])
	.controller('artistListCtrl', artistListCtrl);

	artistListCtrl.$inject = ['$scope', 'dataFactory', '$state'];

	function artistListCtrl($scope, dataFactory, $state) {
		
		if(!window.localStorage.getItem('userID')) {
			$state.go('landing');
			return;
		}

		dataFactory.getUsersDetails().then(function(resp) {
			$scope.users_details = JSON.parse(resp.data.users_details);
			console.log($scope.users_details);
		});

	}
})();
