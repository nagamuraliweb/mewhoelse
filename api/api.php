<?php
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include_once('db_config.php');
include_once('model.php');

class me_api extends db_config {

	public $DB;

	public function __construct() {
		$this->DB = new db_config();
	}

	public function getType() {

		try {

			$types = Model_Admin::getType($this->DB);

			if (empty($types)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'types' => json_encode($types)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getBody() {

		try {

			$bodies = Model_Admin::getBody($this->DB);

			if (empty($bodies)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'bodies' => json_encode($bodies)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getExperience() {

		try {

			$experiences = Model_Admin::getExperience($this->DB);

			if (empty($experiences)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'experiences' => json_encode($experiences)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getGender() {

		try {

			$genders = Model_Admin::getGender($this->DB);

			if (empty($genders)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'genders' => json_encode($genders)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getHairs() {

		try {

			$hairs = Model_Admin::getHairs($this->DB);

			if (empty($hairs)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'hairs' => json_encode($hairs)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getHairColors() {

		try {

			$hairColors = Model_Admin::getHairColors($this->DB);

			if (empty($hairColors)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'hairColors' => json_encode($hairColors)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getLanguages() {

		try {

			$languages = Model_Admin::getLanguages($this->DB);

			if (empty($languages)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'languages' => json_encode($languages)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getProjects() {

		try {

			$projects = Model_Admin::getProjects($this->DB);

			if (empty($projects)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'projects' => json_encode($projects)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getRoles() {

		try {

			$roles = Model_Admin::getRoles($this->DB);

			if (empty($roles)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'roles' => json_encode($roles)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getSkills() {

		try {

			$skills = Model_Admin::getSkills($this->DB);

			if (empty($skills)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'skills' => json_encode($skills)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getSkins() {

		try {

			$skins = Model_Admin::getSkins($this->DB);

			if (empty($skins)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'skins' => json_encode($skins)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function userLogin() {

		try {
			$postdata = json_decode(file_get_contents("php://input"));
			
			if (!filter_var($postdata->email, FILTER_VALIDATE_EMAIL)) {
				throw new Exception('Email is required');
			}

			if (empty($postdata->password)) {
				throw new Exception('Password is required');
			}

			$data = [
				'email' => $postdata->email,
				'password' => md5($postdata->password)
			];

			$res = Model_Admin::userLogin($this->DB, $data);

			if (empty($res->user_id)) {
				throw new Exception('Invalid Credentials');
			}

			$result = ['error' => 0, 'user_id' => $res->user_id];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function forgetPassword() {

		try {
			$postdata = json_decode(file_get_contents("php://input"));

			if (!filter_var($postdata->email, FILTER_VALIDATE_EMAIL)) {
				throw new Exception('Email is required');
			}

			if (empty($postdata->password)) {
				throw new Exception('Password is required');
			}

			if (empty($postdata->confirm_password)) {
				throw new Exception('Confirm password is required');
			}

			if ($postdata->password !== $postdata->confirm_password) {
				throw new Exception('Password and Confirm password does not match');
			}

			$data = [
				'email' => $postdata->email,
				'password' => md5($postdata->password)
			];

			if(!Model_Admin::isEmailExists($this->DB, $postdata->email)) {
				throw new Exception('Email id not exist');
			}

			if (!Model_Admin::forgetPassword($this->DB, $data)) {
				throw new Exception('Error occured. Please try again.');
			}

			$result = ['error' => 0, 'msg' => 'Successfully updated'];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function signUp() {

		try {
			$postdata = json_decode(file_get_contents("php://input"));

			if (!ctype_digit($postdata->profession)) {
				throw new Exception('Invalid profession');
			}

			if (empty($postdata->name)) {
				throw new Exception('Name is required');
			}

			if (!filter_var($postdata->email, FILTER_VALIDATE_EMAIL)) {
				throw new Exception('Email is required');
			}

			if (!ctype_digit($postdata->mobile)) {
				throw new Exception('Mobile is required');
			}

			if(!preg_match('/^[0-9]{10}+$/', $postdata->mobile)) {
				throw new Exception('Mobile number shoud be 10 digit');
			}

			if (empty($postdata->password)) {
				throw new Exception('Password is required');
			}

			if (empty($postdata->confirm_password)) {
				throw new Exception('Confirm password is required');
			}

			if ($postdata->password !== $postdata->confirm_password) {
				throw new Exception('Password and Confirm password does not match');
			}

			$data = [
				'user_type' => $postdata->profession,
				'name' => $postdata->name,
				'email' => $postdata->email,
				'password' => md5($postdata->password),
				'mobile' => $postdata->mobile
			];

			if(Model_Admin::isEmailExists($this->DB, $postdata->email)) {
				throw new Exception('Email id is already exist');
			}

			$user_id = Model_Admin::signUp($this->DB, $data);

			if (empty($user_id)) {
				throw new Exception('Error occured. Please try again.');
			}

			$result = ['error' => 0, 'user_id' => $user_id];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getUserDetails() {

		try {

			if (empty($_GET['user_id'])) {
				throw new Exception('Invalid user');
			}

			$user_details = Model_Admin::getUserDetails($this->DB, $_GET['user_id']);

			if (empty($user_details)) {
				throw new Exception('Invalid user');
			}

			$result = ['error' => 0, 'user_details' => json_encode($user_details)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function getUsersDetails() {

		try {

			$users_details = Model_Admin::getUsersDetails($this->DB);

			if (empty($users_details)) {
				throw new Exception('No records');
			}

			$result = ['error' => 0, 'users_details' => json_encode($users_details)];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function saveArtistDetails() {

		try {
			$postdata = json_decode(file_get_contents("php://input"));

			if (empty($postdata->user_id)) {
				throw new Exception('Invalid user');
			}

			if (empty($postdata->gender)) {
				throw new Exception('Choose gender');
			}

			if (empty($postdata->dob)) {
				throw new Exception('Choose DOB');
			}

			if (empty($postdata->img_name)) {
				throw new Exception('Choose profile picture');
			}

			if (empty($postdata->videos)) {
				throw new Exception('Enter videos');
			}

			if (empty($postdata->skills)) {
				throw new Exception('Choose skills');
			}

			if ($postdata->skills === 0) {
				if (empty($postdata->otherskills)) {
					throw new Exception('Enter skills');
				}
			}

			if (empty($postdata->experince)) {
				throw new Exception('Choose experince');
			}

			if (empty($postdata->city)) {
				throw new Exception('Choose city');
			}
			
			if (empty($postdata->other_ethnicity)) {
				throw new Exception('Enter ethnicity');
			}

			if (empty($postdata->body_type)) {
				throw new Exception('Choose body type');
			}

			if (empty($postdata->hair_type)) {
				throw new Exception('Choose hair type');
			}

			if ($postdata->hair_type === 0) {
				if (empty($postdata->others_hairtype)) {
					throw new Exception('Enter hair type');
				}
			}

			if (empty($postdata->weight)) {
				throw new Exception('Enter weight');
			}

			if (empty($postdata->skin_color)) {
				throw new Exception('Choose skin color');
			}

			if (empty($postdata->hair_color)) {
				throw new Exception('Enter hair color');
			}

			if (!ctype_digit($postdata->training)) {
				throw new Exception('Choose professional training');
			}

			if (empty($postdata->languages)) {
				throw new Exception('Choose languages');
			}

			if ($postdata->languages === 0) {
				if (empty($postdata->languages)) {
					throw new Exception('Enter languages');
				}
			}

			if ( ! file_exists('../img/profile')) {
				mkdir('../img/profile', 0777, true);
			}

			if (copy('../img/tmp/'.$postdata->img_name, '../img/profile/'.$postdata->user_id.'.jpg')) {
				unlink('../img/tmp/'.$postdata->img_name);
			}

			$data = [
				'user_id' => $postdata->user_id,
				'gender' => $postdata->gender,
				'dob' => $postdata->dob,
				'videos' => $postdata->videos,
				'skills' => $postdata->skills,
				'otherskills' => $postdata->otherskills ? $postdata->otherskills : null,
				'experince' => $postdata->experince,
				'city' => $postdata->city,
				'other_ethnicity' => $postdata->other_ethnicity,
				'body_type' => $postdata->body_type,
				'hair_type' => $postdata->hair_type,
				'others_hairtype' => $postdata->others_hairtype ? $postdata->others_hairtype : null,
				'weight' => $postdata->weight,
				'skin_color' => $postdata->skin_color,
				'hair_color' => $postdata->hair_color,
				'training' => $postdata->training,
				'languages' => $postdata->languages,
				'others_languages' => $postdata->others_languages ? $postdata->others_hairtype : null
			];
			
			$user_id = Model_Admin::isUserRegisteredAlready($this->DB, $postdata->user_id);

			if (empty($user_id)) {
				if(!Model_Admin::saveArtistDetails($this->DB, $data)) {
					throw new Exception('Error occured');
				}
			} else {
				if(!Model_Admin::updateArtistDetails($this->DB, $data)) {
					throw new Exception('Error occured');
				}
			}

			$result = ['error' => 0, 'msg' => 'Successfully saved details'];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function saveTechnicianDetails() {

		try {
			$postdata = json_decode(file_get_contents("php://input"));

			if (empty($postdata->user_id)) {
				throw new Exception('Invalid user');
			}

			if (empty($postdata->gender)) {
				throw new Exception('Choose gender');
			}

			if (empty($postdata->dob)) {
				throw new Exception('Choose DOB');
			}

			if (empty($postdata->img_name)) {
				throw new Exception('Choose profile picture');
			}

			if (empty($postdata->videos)) {
				throw new Exception('Enter videos');
			}

			if (empty($postdata->skills)) {
				throw new Exception('Choose skills');
			}

			if (empty($postdata->experince)) {
				throw new Exception('Choose experince');
			}

			if (empty($postdata->city)) {
				throw new Exception('Choose city');
			}
			
			if (empty($postdata->other_ethnicity)) {
				throw new Exception('Enter ethnicity');
			}

			if (!ctype_digit($postdata->training)) {
				throw new Exception('Choose professional training');
			}

			if (empty($postdata->languages)) {
				throw new Exception('Choose languages');
			}

			if ($postdata->languages === 7) {
				if (empty($postdata->languages)) {
					throw new Exception('Enter languages');
				}
			}

			if ( ! file_exists('../img/profile')) {
				mkdir('../img/profile', 0777, true);
			}

			if (copy('../img/tmp/'.$postdata->img_name, '../img/profile/'.$postdata->user_id.'.jpg')) {
				unlink('../img/tmp/'.$postdata->img_name);
			}

			$data = [
				'user_id' => $postdata->user_id,
				'gender' => $postdata->gender,
				'dob' => $postdata->dob,
				'videos' => $postdata->videos,
				'otherskills' => $postdata->skills,
				'experince' => $postdata->experince,
				'city' => $postdata->city,
				'other_ethnicity' => $postdata->other_ethnicity,
				'training' => $postdata->training,
				'languages' => $postdata->languages,
				'others_languages' => $postdata->others_languages ? $postdata->others_hairtype : null
			];

			$user_id = Model_Admin::isUserRegisteredAlready($this->DB, $postdata->user_id);

			if (empty($user_id)) {
				if(!Model_Admin::saveTechnicianDetails($this->DB, $data)) {
					throw new Exception('Error occured');
				}
			} else {
				if(!Model_Admin::updateTechnicianDetails($this->DB, $data)) {
					throw new Exception('Error occured');
				}
			}

			$result = ['error' => 0, 'msg' => 'Successfully saved details'];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function saveClientDetails() {

		try {
			$postdata = json_decode(file_get_contents("php://input"));

			if (empty($postdata->user_id)) {
				throw new Exception('Invalid user');
			}

			if (empty($postdata->gender)) {
				throw new Exception('Choose gender');
			}

			if (empty($postdata->project)) {
				throw new Exception('Choose videos');
			}

			if (empty($postdata->projectname)) {
				throw new Exception('Enter project name');
			}

			if (empty($postdata->project_type)) {
				throw new Exception('Choose project type');
			}

			if (empty($postdata->project_description)) {
				throw new Exception('Enter project description');
			}

			if (empty($postdata->roll_type)) {
				throw new Exception('Choose roll type');
			}

			if (empty($postdata->looking_for)) {
				throw new Exception('Choose looking for');
			}

			if (empty($postdata->character_name)) {
				throw new Exception('Enter character name');
			}

			if (empty($postdata->character_description)) {
				throw new Exception('Enter character description');
			}

			if (empty($postdata->body_type)) {
				throw new Exception('Choose body type');
			}

			if (empty($postdata->experince)) {
				throw new Exception('Choose experince');
			}

			if (!ctype_digit($postdata->training)) {
				throw new Exception('Choose professional training');
			}

			if (empty($postdata->languages)) {
				throw new Exception('Choose languages');
			}

			if ($postdata->languages === 0) {
				if (empty($postdata->languages)) {
					throw new Exception('Enter languages');
				}
			}

			if (empty($postdata->production_housename)) {
				throw new Exception('Enter production housename');
			}

			if ( ! file_exists('../img/profile')) {
				mkdir('../img/profile', 0777, true);
			}

			if (copy('../img/tmp/'.$postdata->img_name, '../img/profile/'.$postdata->user_id.'.jpg')) {
				unlink('../img/tmp/'.$postdata->img_name);
			}

			$data = [
				'user_id' => $postdata->user_id,
				'gender' => $postdata->gender,
				'project' => $postdata->project,
				'projectname' => $postdata->projectname,
				'project_type' => $postdata->project_type,
				'project_description' => $postdata->project_description,
				'roll_type' => $postdata->roll_type,
				'looking_for' => $postdata->looking_for,
				'character_name' => $postdata->character_name,
				'character_description' => $postdata->character_description,
				'body_type' => $postdata->body_type,
				'experince' => $postdata->experince,
				'training' => $postdata->training,
				'languages' => $postdata->languages,
				'others_languages' => $postdata->others_languages ? $postdata->others_hairtype : null,
				'production_housename' => $postdata->production_housename,
			];

			$user_id = Model_Admin::isUserRegisteredAlready($this->DB, $postdata->user_id);

			if (empty($user_id)) {
				if(!Model_Admin::saveClientDetails($this->DB, $data)) {
					throw new Exception('Error occured');
				}
			} else {
				if(!Model_Admin::updateClientDetails($this->DB, $data)) {
					throw new Exception('Error occured');
				}
			}

			$result = ['error' => 0, 'msg' => 'Successfully saved details'];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function generateHash() {

		try {
			$postdata = json_decode(file_get_contents("php://input"));

			if (empty($postdata->productinfo)) {
				throw new Exception('Invalid product info');
			}

			if (empty($postdata->firstname)) {
				throw new Exception('Invalid firstname');
			}

			if (!filter_var($postdata->email, FILTER_VALIDATE_EMAIL)) {
				throw new Exception('Email is required');
			}
			
			$SALT = "nLBSerFb53";
		
			$posted = [];

			$posted['key'] = "8FeKgXrj";
			$posted['txnid'] = substr(hash('sha256', mt_rand() . microtime()), 0, 20);
			$posted['key'] = 500;
			
			foreach($_POST as $key => $value) {    
				$posted[$key] = $value; 
			}

			// Hash Sequence
			$hashSequence = "key|txnid|amount|productinfo|firstname|email||||||||||";
			$hashVarsSeq = explode('|', $hashSequence);
			$hash_string = ''; 
			foreach ($hashVarsSeq as $hash_var) {
				$hash_string .= isset($posted[$hash_var]) ? $posted[$hash_var] : '';
				$hash_string .= '|';
			}
		
			$hash_string .= $SALT;		
			$hash = strtolower(hash('sha512', $hash_string));

			$result = ['error' => 0, 'key' => $hash];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function imageUpload() {

		try {
			$expensions = ['jpeg', 'jpg', 'png'];

			if( ! isset($_FILES['file']) || ! is_uploaded_file($_FILES['file']['tmp_name']))
				throw new Exception('Image file is Missing');

			$item_name = $_FILES['file']['name'];
			$file_explode = explode('.', $item_name);
			$file_end = end($file_explode);

			$file_ext = strtolower($file_end);

			if(in_array($file_ext, $expensions)=== false)
				throw new Exception('extension not allowed, please choose a JPEG or PNG file.');

			if($_FILES['file']['size'] > 2097152)
				throw new Exception('File size must be exactly 2 MB');	

			$upload_image = $_FILES['file'];  
			$unique_id  = uniqid();

			if ( ! file_exists('../img/tmp')) {
				mkdir('../img/tmp', 0777, true);
			}

			move_uploaded_file($_FILES['file']['tmp_name'], '../img/tmp/'.$unique_id.'.jpg');

			$result = ['error' => 0, 'img_name' => $unique_id.'.jpg'];
		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}
}

$api = new me_api();

if($_GET['f'] && method_exists($api, $_GET['f'])) {
	$api->$_GET['f']();
	exit;
}

?>