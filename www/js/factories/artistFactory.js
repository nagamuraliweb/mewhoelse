angular.module('meapp.factories.artistFactory', [])
	.factory('artistFactory', ['artistService', '$q', function (artistService, $q) {                                                     

	return {
		imageUpload: imageUpload,
		videoUpload: videoUpload,
		saveArtistDetails: saveArtistDetails,
		saveTechnicianDetails: saveTechnicianDetails,
		saveClientDetails: saveClientDetails
	}

	function imageUpload(fd) {
		var deffered = $q.defer();
		artistService.imageUpload(fd).then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function videoUpload(fd) {
		var deffered = $q.defer();
		artistService.videoUpload(fd).then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function saveArtistDetails(artist) {
		var deffered = $q.defer();
		artistService.saveArtistDetails(artist).then(function (resp) {
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function saveTechnicianDetails(technician) {
		var deffered = $q.defer();
		artistService.saveTechnicianDetails(technician).then(function (resp) {
			//console.log(resp);
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

	function saveClientDetails(client) {
		var deffered = $q.defer();
		artistService.saveClientDetails(client).then(function (resp) {
			//console.log(resp);
			deffered.resolve(resp);
		}, function (error) {
			console.log(error);
		});
		return deffered.promise;
	}

}]);
