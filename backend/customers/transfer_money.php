<?php

  require_once("customers.php");

  $fromId = $_POST['from_id'];
  $accountNumber = $_POST['account_number'];
  $toId = $db->query("SELECT id from customers WHERE account_number=:account_number", [
    ":account_number"=>$accountNumber
  ]);

  $toId ? $toId = $toId[0]['id'] : $toId = null;
  $remaining = $_POST['remaining'];
  $transferBalance = $_POST['transfer_balance'];

  if($toId){

    $transferId = $db->query('INSERT INTO transfers (fr_customer , to_customer, money) VALUES (
      :fr_customer,
      :to_customer,
      :money)', [
      ":fr_customer"=>$fromId,
      ":to_customer"=>$toId,
      ":money"=>$transferBalance,
    ]);
  
    $db->query("UPDATE customers SET current_balance=:current_balance WHERE id=:id",[
      ":current_balance"=>$remaining,
      ":id"=>$fromId,
    ]);

    $db->query("UPDATE customers SET current_balance=current_balance+$transferBalance WHERE id=:id",[
      ":id"=>$toId,
    ]);

  }else{
    
  }

?>