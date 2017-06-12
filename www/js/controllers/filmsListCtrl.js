(function() {
    'use strict';

	angular.module('meapp.controllers.filmsListCtrl', [])                                                                                      
	.controller('filmsListCtrl', filmsListCtrl);

	filmsListCtrl.$inject = ['$scope', 'dataFactory', '$state'];

	function filmsListCtrl($scope, dataFactory, $state) {
		
		var vm = this;
		$scope.user_id = window.localStorage.getItem('userID');
		$scope.version = new Date().getTime();

		dataFactory.getProjects().then(function(resp) {
			vm.projects = JSON.parse(resp.data.projects);
		});

		dataFactory.getUsersDetails().then(function(resp) {
			$scope.users_details = JSON.parse(resp.data.users_details);
			console.log($scope.users_details);
		});

	}
})();
