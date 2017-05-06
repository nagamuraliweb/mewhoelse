angular.module('meapp.services.dataService', [])
	.service('dataService', ['$http', function($http) {

	this.getType = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getType',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getBody = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getBody',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getExperience = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getExperience',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getHairs = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getHairs',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getHairColors = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getHairColors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getLanguages = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getLanguages',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getSkills = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getSkills',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getSkins = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getSkins',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getProjects = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getProjects',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.getRoles = function() {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=getRoles',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {}
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

}]);