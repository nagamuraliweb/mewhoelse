<?php

class db_config extends PDO {

	public function __construct() {
		try {

		    parent::__construct('mysql:host=localhost;dbname=dr_mem', 'mewhoelse2017', 'b02or3n4%Szmrg');
		    $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		} catch (PDOException $e) {

		    echo "Connection failed: " . $e->getMessage();
    	}
	}

	public function close() {
		$this->conn = null;
	}
}

?>