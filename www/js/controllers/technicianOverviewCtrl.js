(function() {
    'use strict';

	angular.module('meapp.controllers.technicianOverviewCtrl', [])
	.controller('technicianOverviewCtrl', technicianOverviewCtrl);

	technicianOverviewCtrl.$inject = ['$scope'];

	function technicianOverviewCtrl($scope) {

		if(!window.localStorage.getItem('userID')) {
			$state.go('landing');
			return;
		}

	}
})();
