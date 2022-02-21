<?php
 set_time_limit(0);

 header('Content-Type: application/json');
 header('Access-Control-Allow-Origin: *');

 require_once("_controls/_databaseConnection.php");
 require_once("_controls/_generators.php");

 
 $db = new DB("127.0.0.1", "banking_system", "root", "");
 $gr = new Generators();


define("API_LINK", "http://127.0.0.1:2300/");

define("DOMAIN_LINK", "http://127.0.0.1:2300/media/");

function printResult($data){
  $data = array(
    "status"=>true,
    "code"=>200,
    "data"=>$data);
  echo json_encode($data);
  http_response_code(200);
}

?>