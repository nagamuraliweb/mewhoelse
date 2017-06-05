(function() {
    'use strict';

	angular.module('meapp.controllers.clientOverviewCtrl', [])
	.controller('clientOverviewCtrl', clientOverviewCtrl);

	clientOverviewCtrl.$inject = ['$scope'];

	function clientOverviewCtrl($scope) {
		// if(!window.localStorage.getItem('userID')) {
		// 	$state.go('landing');
		// 	return;
		// }

	}
})();
