<?php

  require_once("customers.php");

  $customerId = $_POST['customer_id'];
  $current_balance = $_POST['current_balance'];
  
  
  $updateCustomer = $db->query("UPDATE customers SET current_balance=:current_balance,
  WHERE id=:customer_id",[
    ":current_balance"=>$current_balance,
    ":customer_id"=>$customerId,
  ]);
  
  

?>