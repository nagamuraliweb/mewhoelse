<?php
session_start();

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

			if (empty($_POST['email'])) {
				throw new Exception('Email is required');
			}

			if (empty($_POST['password'])) {
				throw new Exception('Password is required');
			}

			$data = [
				'email' => $_POST['email'],
				'password' => $_POST['password']
			];

			$user_id = Model_Admin::userLogin($this->DB, $data);

			if (empty($user_id)) {
				throw new Exception('Invalid Credentials');
			}

			$_SESSION['user_id'] = $user_id;

			$result = ['error' => 0, 'msg' => 'Successfully logged in'];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function forgetPassword() {

		try {

			if (empty($_POST['email'])) {
				throw new Exception('Email is required');
			}

			if (empty($_POST['password'])) {
				throw new Exception('Password is required');
			}

			if (empty($_POST['confirm_password'])) {
				throw new Exception('Confirm password is required');
			}

			if ($_POST['password'] !== $_POST['confirm_password']) {
				throw new Exception('Password and Confirm password does not match');
			}

			$data = [
				'email' => $_POST['email'],
				'password' => $_POST['password'],
				'confirm_password' => $_POST['confirm_password']
			];

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

			if (!ctype_digit($_POST['profession'])) {
				throw new Exception('Invalid profession');
			}

			if (empty($_POST['name'])) {
				throw new Exception('Name is required');
			}

			if (empty($_POST['email'])) {
				throw new Exception('Email is required');
			}

			if (!ctype_digit($_POST['mobile'])) {
				throw new Exception('Mobile is required');
			}

			if (empty($_POST['password'])) {
				throw new Exception('Password is required');
			}

			if (empty($_POST['confirm_password'])) {
				throw new Exception('Confirm password is required');
			}

			if ($_POST['password'] !== $_POST['confirm_password']) {
				throw new Exception('Password and Confirm password does not match');
			}

			$data = [
				'user_type' => $_POST['profession'],
				'name' => $_POST['name'],
				'email' => $_POST['email'],
				'password' => $_POST['password'],
				'mobile' => $_POST['mobile']
			];

			$user_id = Model_Admin::signUp($this->DB, $data);

			if (empty($user_id)) {
				throw new Exception('Error occured. Please try again.');
			}

			$_SESSION['user_id'] = $user_id;

			$result = ['error' => 0, , 'msg' => 'Successfully registered'];

		} catch (Exception $e) {
			$result = ['error' => 1, 'msg' => $e->getMessage()];
		}

		echo json_encode($result);
	}

	public function saveDetails() {

		try {

			if (!ctype_digit($_POST['profession'])) {
				throw new Exception('Invalid profession');
			}

			if (empty($_POST['name'])) {
				throw new Exception('Name is required');
			}

			if (empty($_POST['email'])) {
				throw new Exception('Email is required');
			}

			if (empty($_POST['mobile'])) {
				throw new Exception('Mobile is required');
			}

			if (empty($_POST['password'])) {
				throw new Exception('Password is required');
			}

			if (empty($_POST['confirm_password'])) {
				throw new Exception('Confirm password is required');
			}

			if ($_POST['password'] !== $_POST['confirm_password']) {
				throw new Exception('Password and Confirm password does not match');
			}

			$data = [
				'user_type' => $_POST['profession'],
				'name' => $_POST['name'],
				'email' => $_POST['email'],
				'password' => $_POST['password'],
				'mobile' => $_POST['mobile']
			];

			$user_id = Model_Admin::signUp($this->DB, $data);

			if (empty($user_id)) {
				throw new Exception('Error occured. Please try again.');
			}

			$_SESSION['user_id'] = $user_id;

			$result = ['error' => 0, , 'msg' => 'Successfully registered'];

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