(function() {
    'use strict';

	angular.module('meapp.controllers.artistListCtrl', [])
	.controller('artistListCtrl', artistListCtrl);

	artistListCtrl.$inject = ['$scope', 'dataFactory', '$state'];

	function artistListCtrl($scope, dataFactory, $state) {

		var vm = this;

		dataFactory.getUsersDetails().then(function(resp) {
			console.log(resp);
			vm.user_details = JSON.parse(resp.data.users_details);
			console.log(vm.user_details);
		});

	}
})();
