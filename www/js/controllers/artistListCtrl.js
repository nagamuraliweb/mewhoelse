(function() {
    'use strict';

	angular.module('meapp.controllers.artistListCtrl', [])
	.controller('artistListCtrl', artistListCtrl);

	artistListCtrl.$inject = ['dataFactory', 'coreConstant'];

	function artistListCtrl(dataFactory, coreConstant) {

		var vm = this;
		var artist_type = 1;

		vm.has_records = false;
		vm.type = coreConstant.type;

		dataFactory.getFilterUsers(artist_type).then(function(resp) {
			var result = resp.data;

			if (result.error == 0) {
				vm.has_records = true;
				vm.users = JSON.parse(result.filter_users);
			}
		});

	}
})();
