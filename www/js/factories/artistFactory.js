angular.module('meapp.factories.artistFactory', [])
	.factory('artistFactory', ['artistService', '$q', function (artistService, $q) {                                                     

	return {
		imageUpload: imageUpload
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
}]);
