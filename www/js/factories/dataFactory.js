angular.module('meapp.factories.dataFactory', [])
	.factory('dataFactory', ['dataService', '$q', function(dataService, $q) {                                                                                          

	return {
		getUserDetails: getUserDetails,
		hasRegistered: hasRegistered,
		getProjectDetails: getProjectDetails,
		getFilterUsers: getFilterUsers
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

	function hasRegistered(user_id) {
		var deffered = $q.defer();
		dataService.hasRegistered(user_id).then(function (resp) {
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

	function getFilterUsers(user_type) {
		var deffered = $q.defer();
		dataService.getFilterUsers(user_type).then(function (resp) {
			//console.log(resp);
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

}]);
