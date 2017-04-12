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
			$stmt->bindParam(':user_email', $data['email']);
			$stmt->bindParam(':user_password', $data['password']);
			
			$stmt->execute();
			$row = $stmt->fetch(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function signUp ($DB, $data) {

			$sql = 'INSERT INTO dr_mem_users VALUES (user_type = :user_type, user_name = :user_name,
				user_email = :user_email, user_password = :user_password, user_mobile = :user_mobile)';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_type', $data['user_type'], PDO::PARAM_INT);
			$stmt->bindParam(':user_name', $data['name'], PDO::PARAM_STR);
			$stmt->bindParam(':user_email', $data['email'], PDO::PARAM_STR);
			$stmt->bindParam(':user_password', $data['password'], PDO::PARAM_STR);
			$stmt->bindParam(':user_mobile', $data['mobile'], PDO::PARAM_INT);
			
			$stmt->execute();

			return $DB->lastInsertId();
		}

		public function getUserDetails ($DB, $data) {

			$sql = 'SELECT * FROM dr_mem_users as u 
				INNER JOIN dr_mem_users_details as ud ON ud.user_id = u.user_id 
				WHERE u.user_id = :user_id';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_id', $data['user_id']);
			
			$stmt->execute();
			$row = $stmt->fetch(PDO::FETCH_OBJ);

			return empty($row) ? [] : $row;
		}

		public function forgetPassword ($DB, $data) {

			$sql = 'UPDATE dr_mem_users SET password = :password WHERE user_email = :user_email';

			$stmt = $DB->prepare($sql);
			$stmt->bindParam(':user_email', $data['email'], PDO::PARAM_STR);
			$stmt->bindParam(':password', $data['password'], PDO::PARAM_STR);

			return $stmt->execute();
		}
	}
?>