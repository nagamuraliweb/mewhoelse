angular.module('meapp.services.artistService', [])
	.service('artistService', ['$http', '$filter', function($http, $filter) {

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
				dob: $filter('date')(artist.dob, 'dd-MM-yyyy'),
				videos: artist.videos,
				skills: parseInt(artist.skills),
				otherskills: artist.otherskills,
				experince: parseInt(artist.experince),
				city: artist.city,
				other_ethnicity: artist.other_ethnicity,
				body_type: parseInt(artist.body_type),
				hair_type: parseInt(artist.hair_type),
				others_hairtype: artist.others_hairtype,
				weight: parseInt(artist.weight),
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
                user_id: parseInt(technician.user_id),
                gender: parseInt(technician.gender),
                dob: $filter('date')(technician.dob, 'dd-MM-yyyy'),
                videos: technician.videos,
                skills: technician.skills,
                experince: parseInt(technician.experince),
                city: technician.city,
                other_ethnicity: technician.other_ethnicity,
                training: technician.training,
                languages: parseInt(technician.languages),
                others_languages: technician.others_languages,
                img_name: technician.img_name
            }
        };

        return $http(request).then(function (resp) {
            return resp;
        });
    }

    this.saveClientDetails = function(client) {
        console.log('client.looking_for');
        console.log(client.looking_for);
        var request = {
            method: 'POST',
            url: 'http://mewhoelse.in/api/api.php?f=saveClientDetails',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: { 
                user_id: parseInt(client.user_id),
                gender: parseInt(client.gender),
                project: client.project,
                projectname: client.projectname,
                project_type: parseInt(client.project_type),
                project_description: client.project_description,
                roll_type: parseInt(client.roll_type),
                looking_for: parseInt(client.looking_for),
                character_name: client.character_name,
                character_description:client.character_description,
                body_type: parseInt(client.body_type),
                experince: parseInt(client.experince),
                training: parseInt(client.training),
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
