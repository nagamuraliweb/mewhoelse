(function() {
    'use strict';

	angular.module('meapp.controllers.filmsListCtrl', [])                                                                                      
	.controller('filmsListCtrl', filmsListCtrl);

	filmsListCtrl.$inject = ['$scope', 'dataFactory', '$state', 'coreConstant'];

	function filmsListCtrl($scope, dataFactory, $state, coreConstant) {
		
		var vm = this;

		jQuery(function ($){
           $(".segment-select").Segment();
      	});

      	vm.project = coreConstant.projectType;
		vm.looking = coreConstant.genders;

		vm.getFilmsType = function(type) {
			dataFactory.getProjectDetails(type).then(function(resp) {
				vm.projects = JSON.parse(resp.data.project_details);
			});
		}

		vm.getFilmsType('1');
	}
})();
