<?php

	class Model_Admin {

		public function getType ($DB) {

			$sql = 'SELECT * FROM dr_mem_type';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getBody ($DB) {

			$sql = 'SELECT * FROM dr_mem_body';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getExperience ($DB) {

			$sql = 'SELECT * FROM dr_mem_experience';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getGender ($DB) {

			$sql = 'SELECT * FROM dr_mem_gender';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getHairs ($DB) {

			$sql = 'SELECT * FROM dr_mem_hairs';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getHairColors ($DB) {

			$sql = 'SELECT * FROM dr_mem_hair_colors';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getLanguages ($DB) {

			$sql = 'SELECT * FROM dr_mem_languages';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getProjects ($DB) {

			$sql = 'SELECT * FROM dr_mem_projects';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getRoles ($DB) {

			$sql = 'SELECT * FROM dr_mem_roles';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getSkills ($DB) {

			$sql = 'SELECT * FROM dr_mem_skills';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getSkins ($DB) {

			$sql = 'SELECT * FROM dr_mem_skins';

			$stmt = $DB->prepare($sql);
			$stmt->execute();

			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function userLogin ($DB, $data) {

			$sql = 'SELECT user_id FROM dr_mem_users 
						WHERE user_email = :user_email AND user_password = :user_password';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_email', $data['email'], PDO::PARAM_STR);
			$stmt->bindParam(':user_password', $data['password'], PDO::PARAM_STR);
			
			$stmt->execute();
			$row = $stmt->fetch(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function signUp ($DB, $data) {

			$sql = 'INSERT INTO dr_mem_users (user_type, user_name, user_email, user_password, user_mobile) 
						VALUES (:user_type, :user_name, :user_email, :user_password, :user_mobile)';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_type', $data['user_type'], PDO::PARAM_INT);
			$stmt->bindParam(':user_name', $data['name'], PDO::PARAM_STR);
			$stmt->bindParam(':user_email', $data['email'], PDO::PARAM_STR);
			$stmt->bindParam(':user_password', $data['password'], PDO::PARAM_STR);
			$stmt->bindParam(':user_mobile', $data['mobile'], PDO::PARAM_INT);
			
			$stmt->execute();

			return $DB->lastInsertId();
		}

		public function getUsersDetails ($DB) {

			$sql = 'SELECT u.user_id, u.user_type, u.user_name, u.user_email, u.user_mobile, ud.user_gender_id, 
					ud.user_skills_id, ud.user_skills_others, ud.user_dob, ud.user_videos, ud.user_experience_id, ud.user_city, 
					ud.user_ethinicity, ud.user_body_id, ud.user_hair_id, ud.user_hair_others, ud.user_weight, 
					ud.user_skin_id, ud.user_hair_color_id, ud.user_is_professional, ud.user_language_id, 
					ud.user_language_others, ud.user_project, ud.user_project_name,
					ud.user_project_id, ud.user_project_description, ud.user_role_id, ud.user_looking_for, ud.user_character_name,
					ud.user_character_description, ud.user_production_house
					FROM dr_mem_users as u  
					INNER JOIN dr_mem_users_details as ud ON ud.user_id = u.user_id';

			$stmt = $DB->prepare($sql);
			
			$stmt->execute();
			$row = $stmt->fetchAll(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function getUserDetails ($DB, $user_id) {

			$sql = 'SELECT u.user_id, u.user_type, u.user_name, u.user_email, u.user_mobile, ud.user_gender_id, 
					ud.user_skills_id, ud.user_skills_others, ud.user_dob, ud.user_videos, ud.user_experience_id, ud.user_city, 
					ud.user_ethinicity, ud.user_body_id, ud.user_hair_id, ud.user_hair_others, ud.user_weight, 
					ud.user_skin_id, ud.user_hair_color_id, ud.user_is_professional, ud.user_language_id, 
					ud.user_language_others, ud.user_project, ud.user_project_name,
					ud.user_project_id, ud.user_project_description, ud.user_role_id, ud.user_looking_for, ud.user_character_name,
					ud.user_character_description, ud.user_production_house
					FROM dr_mem_users as u 
					LEFT JOIN dr_mem_users_details as ud ON ud.user_id = u.user_id 
					WHERE u.user_id = :user_id';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
			
			$stmt->execute();
			$row = $stmt->fetch(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function forgetPassword ($DB, $data) {

			$sql = 'UPDATE dr_mem_users SET user_password = :password WHERE user_email = :user_email';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_email', $data['email'], PDO::PARAM_STR);
			$stmt->bindParam(':password', $data['password'], PDO::PARAM_STR);

			return $stmt->execute();
		}

		public function isEmailExists ($DB, $email) {

			$sql = 'SELECT user_id FROM dr_mem_users WHERE user_email = :user_email';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_email', $email, PDO::PARAM_STR);
			
			$stmt->execute();
			$row = $stmt->fetch(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function isUserRegisteredAlready ($DB, $user_id) {

			$sql = 'SELECT user_id FROM dr_mem_users_details WHERE user_id = :user_id';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
			
			$stmt->execute();
			$row = $stmt->fetch(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function saveArtistDetails ($DB, $data) {

			$sql = 'INSERT INTO dr_mem_users_details (user_id, user_gender_id, user_skills_id, user_skills_others, user_dob,
					user_videos, user_experience_id, user_city, user_ethinicity, user_body_id, user_hair_id,
					user_hair_others, user_weight, user_skin_id, user_hair_color_id, user_is_professional,
					user_language_id, user_language_others) 
						VALUES (:user_id, :gender, :skills, :otherskills, :dob, :videos, :experince,
					:city, :other_ethnicity, :body_type, :hair_type, :others_hairtype, :weight, :skin_color, :hair_color,
					:training, :languages, :others_languages)';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_id', $data['user_id'], PDO::PARAM_INT);
			$stmt->bindParam(':gender', $data['gender'], PDO::PARAM_INT);
			$stmt->bindParam(':dob', $data['dob'], PDO::PARAM_STR);
			$stmt->bindParam(':videos', $data['videos'], PDO::PARAM_STR);

			if ($data['skills'] == 0) {
				$stmt->bindParam(':skills', $data['skills'], PDO::PARAM_NULL);
				$stmt->bindParam(':otherskills', $data['otherskills'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':skills', $data['skills'], PDO::PARAM_INT);
				$stmt->bindParam(':otherskills', $data['otherskills'], PDO::PARAM_NULL);
			}
	
			$stmt->bindParam(':experince', $data['experince'], PDO::PARAM_INT);
			$stmt->bindParam(':city', $data['city'], PDO::PARAM_STR);
			$stmt->bindParam(':other_ethnicity', $data['other_ethnicity'], PDO::PARAM_STR);
			$stmt->bindParam(':body_type', $data['body_type'], PDO::PARAM_INT);

			if ($data['hair_type'] == 0) {
				$stmt->bindParam(':hair_type', $data['hair_type'], PDO::PARAM_NULL);
				$stmt->bindParam(':others_hairtype', $data['others_hairtype'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':hair_type', $data['hair_type'], PDO::PARAM_INT);
				$stmt->bindParam(':others_hairtype', $data['others_hairtype'], PDO::PARAM_NULL);
			}

			$stmt->bindParam(':weight', $data['weight'], PDO::PARAM_INT);
			$stmt->bindParam(':skin_color', $data['skin_color'], PDO::PARAM_INT);
			$stmt->bindParam(':hair_color', $data['hair_color'], PDO::PARAM_INT);
			$stmt->bindParam(':training', $data['training'], PDO::PARAM_INT);

			if ($data['languages'] == 0) {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_NULL);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_INT);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_NULL);
			}
			
			$stmt->execute();

			return $DB->lastInsertId();
		}

		public function updateArtistDetails ($DB, $data) {

			$sql = 'UPDATE dr_mem_users_details SET (user_id = :user_id, user_gender_id = :gender,
				user_skills_id = :skills, user_skills_others = :otherskills, user_dob = :dob, user_videos = :videos, user_experience_id = :experince,
				user_city = :city, user_ethinicity = :other_ethnicity, user_body_id = :body_type, user_hair_id = :hair_type,
				user_hair_others = :others_hairtype, user_weight = :weight, user_skin_id = :skin_color, user_hair_color_id = :hair_color,
				user_is_professional = :training, user_language_id = :languages, user_language_others = :others_languages)';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_id', $data['user_id'], PDO::PARAM_INT);
			$stmt->bindParam(':gender', $data['gender'], PDO::PARAM_INT);
			$stmt->bindParam(':dob', $data['dob'], PDO::PARAM_STR);
			$stmt->bindParam(':videos', $data['videos'], PDO::PARAM_STR);

			if ($data['skills'] === 0) {
				$stmt->bindParam(':skills', $data['skills'], PDO::PARAM_NULL);
				$stmt->bindParam(':otherskills', $data['otherskills'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':skills', $data['skills'], PDO::PARAM_INT);
				$stmt->bindParam(':otherskills', $data['otherskills'], PDO::PARAM_NULL);
			}
	
			$stmt->bindParam(':experince', $data['experince'], PDO::PARAM_INT);
			$stmt->bindParam(':city', $data['city'], PDO::PARAM_STR);
			$stmt->bindParam(':other_ethnicity', $data['other_ethnicity'], PDO::PARAM_STR);
			$stmt->bindParam(':body_type', $data['body_type'], PDO::PARAM_INT);

			if ($data['hair_type'] === 0) {
				$stmt->bindParam(':hair_type', $data['hair_type'], PDO::PARAM_NULL);
				$stmt->bindParam(':others_hairtype', $data['others_hairtype'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':hair_type', $data['hair_type'], PDO::PARAM_INT);
				$stmt->bindParam(':others_hairtype', $data['others_hairtype'], PDO::PARAM_NULL);
			}

			$stmt->bindParam(':weight', $data['weight'], PDO::PARAM_INT);
			$stmt->bindParam(':skin_color', $data['skin_color'], PDO::PARAM_INT);
			$stmt->bindParam(':hair_color', $data['hair_color'], PDO::PARAM_INT);
			$stmt->bindParam(':training', $data['training'], PDO::PARAM_INT);

			if ($data['languages'] === 0) {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_NULL);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_INT);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_NULL);
			}
			
			return $stmt->execute();;
		}

		public function saveTechnicianDetails ($DB, $data) {

			$sql = 'INSERT INTO dr_mem_users_details (user_type_id, user_id, user_gender_id, user_dob, user_videos,
					user_skills_others, user_experience_id, user_city, user_ethinicity, user_is_professional,
					user_language_id, user_language_others) 
						VALUES (:user_type, :user_id, :gender, :dob, :videos, :otherskills, :experince, 
					:city, :other_ethnicity, :training, :languages, :others_languages)';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_type', $data['user_type'], PDO::PARAM_INT);
			$stmt->bindParam(':user_id', $data['user_id'], PDO::PARAM_INT);
			$stmt->bindParam(':gender', $data['gender'], PDO::PARAM_INT);
			$stmt->bindParam(':dob', $data['dob'], PDO::PARAM_STR);
			$stmt->bindParam(':videos', $data['videos'], PDO::PARAM_STR);
			$stmt->bindParam(':otherskills', $data['otherskills'], PDO::PARAM_STR);
	
			$stmt->bindParam(':experince', $data['experince'], PDO::PARAM_INT);
			$stmt->bindParam(':city', $data['city'], PDO::PARAM_STR);
			$stmt->bindParam(':other_ethnicity', $data['other_ethnicity'], PDO::PARAM_STR);
			$stmt->bindParam(':training', $data['training'], PDO::PARAM_INT);

			if ($data['languages'] === 7) {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_NULL);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_INT);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_NULL);
			}
			
			$stmt->execute();

			return $DB->lastInsertId();
		}

		public function updateTechnicianDetails ($DB, $data) {

			$sql = 'UPDATE dr_mem_users_details SET (user_type_id = :user_type, user_id = :user_id, 
				user_gender_id = :gender, user_dob = :dob, user_videos = :videos, user_skills_others = :otherskills, 
				user_experience_id = :experince, user_city = :city, user_ethinicity = :other_ethnicity, 
				user_is_professional = :training, user_language_id = :languages, user_language_others = :others_languages)';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_type', $data['user_type'], PDO::PARAM_INT);
			$stmt->bindParam(':user_id', $data['user_id'], PDO::PARAM_INT);
			$stmt->bindParam(':gender', $data['gender'], PDO::PARAM_INT);
			$stmt->bindParam(':dob', $data['dob'], PDO::PARAM_STR);
			$stmt->bindParam(':videos', $data['videos'], PDO::PARAM_STR);
			$stmt->bindParam(':otherskills', $data['otherskills'], PDO::PARAM_STR);
	
			$stmt->bindParam(':experince', $data['experince'], PDO::PARAM_INT);
			$stmt->bindParam(':city', $data['city'], PDO::PARAM_STR);
			$stmt->bindParam(':other_ethnicity', $data['other_ethnicity'], PDO::PARAM_STR);
			$stmt->bindParam(':training', $data['training'], PDO::PARAM_INT);

			if ($data['languages'] === 7) {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_NULL);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_INT);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_NULL);
			}

			return $stmt->execute();
		}

		public function saveClientDetails ($DB, $data) {

			$sql = 'INSERT INTO dr_mem_users_details (user_type_id, user_id, user_gender_id, user_project, user_project_name,
					user_project_id, user_project_description, user_role_id, user_looking_for, user_character_name,
					user_character_description, user_body_id, user_experience_id, user_is_professional, user_language_id,
					user_language_others, user_production_house) 
						VALUES (:user_type, :user_id, :gender, :project, :projectname, :project_type, :project_description, 
					:roll_type, :looking_for, :character_name, :character_description, :body_type, :experince, 
					:training, :languages, :others_languages, :production_housename)';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_type', $data['user_type'], PDO::PARAM_INT);
			$stmt->bindParam(':user_id', $data['user_id'], PDO::PARAM_INT);
			$stmt->bindParam(':gender', $data['gender'], PDO::PARAM_INT);
			$stmt->bindParam(':project', $data['project'], PDO::PARAM_INT);
			$stmt->bindParam(':projectname', $data['projectname'], PDO::PARAM_STR);
			$stmt->bindParam(':project_type', $data['project_type'], PDO::PARAM_INT);
			$stmt->bindParam(':project_description', $data['project_description'], PDO::PARAM_STR);
			$stmt->bindParam(':roll_type', $data['roll_type'], PDO::PARAM_INT);
			$stmt->bindParam(':looking_for', $data['looking_for'], PDO::PARAM_INT);
			$stmt->bindParam(':character_name', $data['character_name'], PDO::PARAM_STR);
			$stmt->bindParam(':character_description', $data['character_description'], PDO::PARAM_STR);
			$stmt->bindParam(':body_type', $data['body_type'], PDO::PARAM_INT);
			$stmt->bindParam(':experince', $data['experince'], PDO::PARAM_INT);			
			$stmt->bindParam(':training', $data['training'], PDO::PARAM_INT);

			if ($data['languages'] === 7) {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_NULL);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_INT);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_NULL);
			}

			$stmt->bindParam(':production_housename', $data['production_housename'], PDO::PARAM_STR);
			
			$stmt->execute();

			return $DB->lastInsertId();
		}

		public function updateClientDetails ($DB, $data) {

			$sql = 'UPDATE dr_mem_users_details SET (user_type_id = :user_type, user_id = :user_id, 
				user_gender_id = :gender, user_project = :project, user_project_name = :projectname, 
				user_project_id = :project_type, user_project_description = :project_description, 
				user_role_id = :roll_type, user_looking_for = :looking_for, user_character_name = :character_name,
				user_character_description = :character_description, user_body_id = :body_type,
				user_experience_id = :experince, user_is_professional = :training, user_language_id = :languages, 
				user_language_others = :others_languages, user_production_house = :production_housename)';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_type', $data['user_type'], PDO::PARAM_INT);
			$stmt->bindParam(':user_id', $data['user_id'], PDO::PARAM_INT);
			$stmt->bindParam(':gender', $data['gender'], PDO::PARAM_INT);
			$stmt->bindParam(':project', $data['project'], PDO::PARAM_INT);
			$stmt->bindParam(':projectname', $data['projectname'], PDO::PARAM_STR);
			$stmt->bindParam(':project_type', $data['project_type'], PDO::PARAM_INT);
			$stmt->bindParam(':project_description', $data['project_description'], PDO::PARAM_STR);
			$stmt->bindParam(':roll_type', $data['roll_type'], PDO::PARAM_INT);
			$stmt->bindParam(':looking_for', $data['looking_for'], PDO::PARAM_INT);
			$stmt->bindParam(':character_name', $data['character_name'], PDO::PARAM_STR);
			$stmt->bindParam(':character_description', $data['character_description'], PDO::PARAM_STR);
			$stmt->bindParam(':body_type', $data['body_type'], PDO::PARAM_INT);
			$stmt->bindParam(':experince', $data['experince'], PDO::PARAM_INT);			
			$stmt->bindParam(':training', $data['training'], PDO::PARAM_INT);

			if ($data['languages'] === 7) {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_NULL);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_STR);
			} else {
				$stmt->bindParam(':languages', $data['languages'], PDO::PARAM_INT);
				$stmt->bindParam(':others_languages', $data['others_languages'], PDO::PARAM_NULL);
			}

			$stmt->bindParam(':production_housename', $data['production_housename'], PDO::PARAM_STR);
			
			return $stmt->execute();
		}
	}
?>