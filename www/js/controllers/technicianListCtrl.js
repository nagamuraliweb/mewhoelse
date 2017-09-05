(function() {
    'use strict';

	angular.module('meapp.controllers.technicianListCtrl', [])
	.controller('technicianListCtrl', technicianListCtrl);

	technicianListCtrl.$inject = ['dataFactory'];

	function technicianListCtrl(dataFactory) {
		var vm = this;
		var technician_type = 2;

		vm.has_records = false;
		vm.type = coreConstant.type;

		dataFactory.getFilterUsers(technician_type).then(function(resp) {
			var result = resp.data;

			if (result.error == 0) {
				vm.has_records = true;
				vm.users = JSON.parse(result.filter_users);
			}
		});
	}
})();
