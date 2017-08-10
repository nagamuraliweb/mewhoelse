(function() {
    'use strict';

	angular.module('meapp.controllers.filmsListCtrl', [])                                                                                      
	.controller('filmsListCtrl', filmsListCtrl);

	filmsListCtrl.$inject = ['$scope', 'dataFactory', '$state'];

	function filmsListCtrl($scope, dataFactory, $state) {
		
		var vm = this;

		jQuery(function ($){
           $(".segment-select").Segment();
      	});

		vm.getFilmsType = function(type) {
			dataFactory.getProjectDetails(type).then(function(resp) {
				vm.projects = resp.data;
				console.log(vm.projects);
			});
		}

		vm.getFilmsType('1');
	}
})();
