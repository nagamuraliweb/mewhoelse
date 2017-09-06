angular.module('meapp.services.dataService', [])
	.service('dataService', ['$http', function($http) {
    
    this.getFilterUsers = function(user_type) {
        var request = {
            method: 'GET',
            url: 'http://mewhoelse.in/api/api.php?f=getFilterUsers&filter_user='+user_type,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getProjectDetails = function(project_type) {
        var request = {
            method: 'GET',
            url: 'http://mewhoelse.in/api/api.php?f=getProjectDetails&project_type='+project_type,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getClientPosts = function(user_id) {
        var request = {
            method: 'GET',
            url: 'http://mewhoelse.in/api/api.php?f=getClientPosts&user_id='+user_id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getUserDetails = function(user_id) {
        var request = {
            method: 'GET',
            url: 'http://mewhoelse.in/api/api.php?f=getUserDetails&user_id='+user_id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.hasRegistered = function(user_id) {
        var request = {
            method: 'GET',
            url: 'http://mewhoelse.in/api/api.php?f=hasRegistered&user_id='+user_id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.deleteVideo = function(user_id) {
        var request = {
            method: 'GET',
            url: 'http://mewhoelse.in/api/api.php?f=deleteUploadedVideo&user_id='+user_id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

}]);
