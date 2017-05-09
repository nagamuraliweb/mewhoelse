angular.module('meapp.services.artistService', [])
	.service('artistService', ['$http', function($http) {

	this.imageUpload = function(fd) {
        return $http.post('http://mewhoelse.in/api/api.php?f=imageUpload', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(function (resp) {
            return resp;
        });
    }
}]);
