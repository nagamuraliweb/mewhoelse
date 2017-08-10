angular.module('meapp.factories.dataFactory', [])
	.factory('dataFactory', ['dataService', '$q', function(dataService, $q) {                                                                                          

	return {
		getUserDetails: getUserDetails,
		hasRegistered: hasRegistered,
		getProjectDetails: getProjectDetails
	};

	function getUserDetails(user_id) {
		var deffered = $q.defer();
		dataService.getUserDetails(user_id).then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function hasRegistered() {
		var deffered = $q.defer();
		dataService.hasRegistered().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getProjectDetails(project_type) {
		var deffered = $q.defer();
		dataService.getProjectDetails(project_type).then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

}]);
