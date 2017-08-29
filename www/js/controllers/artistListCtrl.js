(function() {
    'use strict';

	angular.module('meapp.controllers.artistListCtrl', [])
	.controller('artistListCtrl', artistListCtrl);

	artistListCtrl.$inject = ['dataFactory', 'coreConstant'];

	function artistListCtrl(dataFactory, coreConstant) {

		var vm = this;
		var types = '1, 2';
		vm.has_records = false;
		vm.type = coreConstant.type;

		dataFactory.getFilterUsers(types).then(function(resp) {
			var result = resp.data;

			if (result.error == 0) {
				has_records = true;
				vm.users = result.filter_users;
			}
		});

	}
})();
