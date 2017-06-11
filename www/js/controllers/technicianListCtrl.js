(function() {
    'use strict';

	angular.module('meapp.controllers.technicianListCtrl', [])
	.controller('technicianListCtrl', technicianListCtrl);

	technicianListCtrl.$inject = ['$scope', 'dataFactory', 'artistFactory', 'loaderFactory', '$state', '$stateParams'];

	function technicianListCtrl($scope, dataFactory, artistFactory, loaderFactory, $state, $stateParams) {

	}
})();
