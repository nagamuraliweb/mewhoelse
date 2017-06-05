angular.module('meapp.factories.dataFactory', [])
	.factory('dataFactory', ['dataService', '$q', function(dataService, $q) {                                                                                          

	return {
		getType: getType,
		getBody: getBody,
		getExperience: getExperience,
		getHairs: getHairs,
		getHairColors: getHairColors,
		getLanguages: getLanguages,
		getSkills: getSkills,
		getSkins: getSkins,
		getProjects: getProjects,
		getRoles: getRoles,
		getUserDetails: getUserDetails,
		getGender: getGender,
		getUserType: getUserType,
		getUsersDetails: getUsersDetails
	}

	function getType() {
		var deffered = $q.defer();
		dataService.getType().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getUserType() {
		var usertype = getType();
		console.log(JSON.parse(usertype.data.types));
	}

	function getBody() {
		var deffered = $q.defer();
		dataService.getBody().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getExperience() {
		var deffered = $q.defer();
		dataService.getExperience().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getHairs() {
		var deffered = $q.defer();
		dataService.getHairs().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getHairColors() {
		var deffered = $q.defer();
		dataService.getHairColors().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getLanguages() {
		var deffered = $q.defer();
		dataService.getLanguages().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getSkills() {
		var deffered = $q.defer();
		dataService.getSkills().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getSkins() {
		var deffered = $q.defer();
		dataService.getSkins().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getProjects() {
		var deffered = $q.defer();
		dataService.getProjects().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getRoles() {
		var deffered = $q.defer();
		dataService.getRoles().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getUserDetails(user_id) {
		var deffered = $q.defer();
		dataService.getUserDetails(user_id).then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getUsersDetails() {
		var deffered = $q.defer();
		dataService.getUsersDetails().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function getGender() {
		var deffered = $q.defer();
		dataService.getGender().then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

}]);
