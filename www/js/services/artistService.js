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
            	user_id: parseInt(artist.user_id),
                gender: parseInt(artist.gender),
				dob: artist.dob,
				videos: artist.videos,
				skills: parseInt(artist.skills),
				otherskills: artist.otherskills,
				experince: parseInt(artist.experince),
				city: artist.city,
				other_ethnicity: artist.other_ethnicity,
				body_type: parseInt(artist.body_type),
				hair_type: parseInt(artist.hair_type),
				others_hairtype: artist.others_hairtype,
				weight: artist.weight,
				skin_color: parseInt(artist.skin_color),
				hair_color: parseInt(artist.hair_color),
				training: artist.training,
				languages: parseInt(artist.languages),
				others_languages: artist.others_languages,
                img_name: artist.img_name
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.saveTechnicianDetails = function(technician) {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=saveTechnicianDetails',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: { 
                user_id: technician.user_id,
                user_type: technician.user_type,
                gender: technician.gender,
                dob: technician.dob,
                videos: technician.videos,
                skills: technician.skills,
                experince: technician.experince,
                city: technician.city,
                other_ethnicity: technician.other_ethnicity,
                training: technician.training,
                languages: technician.languages,
                others_languages: technician.others_languages,
                img_name: technician.img_name
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.saveClientDetails = function(client) {
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=saveClientDetails',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: { 
                user_id: client.user_id,
                user_type: client.user_type,
                gender: client.gender,
                project: client.project,
                projectname: client.projectname,
                project_type: client.project_type,
                project_description: client.project_description,
                roll_type: client.roll_type,
                looking_for: client.looking_for,
                character_name: client.character_name,
                character_description:client.character_description,
                body_type: client.body_type,
                experince: client.experince,
                training: client.training,
                languages: client.languages,
                others_languages: client.others_languages,
                production_housename: client.production_housename
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

}]);
