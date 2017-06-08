(function() {
    'use strict';

	angular.module('meapp.controllers.artistOverviewCtrl', [])
	.controller('artistOverviewCtrl', artistOverviewCtrl);

	artistOverviewCtrl.$inject = ['$scope'];

	function artistOverviewCtrl($scope) {
		
		if(!window.localStorage.getItem('userID')) {
			$state.go('landing');
			return;
		}

	}
})();
