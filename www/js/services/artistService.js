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

    this.saveArtistDetails = function(artist) {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=saveArtistDetails',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: { 
            	user_id: artist.user_id,
            	user_type: artist.user_type,
                gender: artist.gender,
				dob: artist.dob,
				videos: artist.videos,
				skills: artist.skills,
				otherskills: artist.otherskills,
				experince: artist.experince,
				city: artist.city,
				other_ethnicity: artist.other_ethnicity,
				body_type: artist.body_type,
				hair_type: artist.hair_type,
				others_hairtype: artist.others_hairtype,
				weight: artist.weight,
				skin_color: artist.skin_color,
				hair_color: artist.hair_color,
				training: artist.training,
				languages: artist.languages,
				others_languages: artist.others_languages
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

}]);
