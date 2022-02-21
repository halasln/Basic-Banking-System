<?php

  require_once("./../config.php");

  function saveCustomerImage($customerId, $image){
    
    global $db;
    global $gr;

    $imageId = $gr->generateImageId();

    $imageExtension = pathinfo($image['name'])['extension'];
    $imageName = $customerId . $imageId . "." . $imageExtension;
    $dir = "../media/customers/";
    $imageName2 = "../media/customers/$imageName";

    if (!file_exists($dir)) {
      mkdir($dir, 0777, true);
    }

    if (!file_exists($imageName2)) {
      move_uploaded_file($image['tmp_name'], $imageName2);
    }else{
      unlink($imageName2);
      move_uploaded_file($image['tmp_name'], $imageName2);
    }
    
    $db->query("UPDATE customers SET image=:image WHERE id=:customer_id",[
      ":image"=>$imageName,
      ":customer_id"=>$customerId
    ]);

  }


  function getCustomerInfo($customerId){
    
    global $db;

    $domainLink = DOMAIN_LINK . "customers/";
    $customer = $db->query("SELECT id,
    first_name,
    last_name,
    email,
    CONCAT('$domainLink', image) as image,
    phone_number,
    address,
    current_balance,
    account_number,
    FROM customers
    WHERE id=:customer_id",[
      ":customer_id"=>$customerId
    ]);

    return $customer;

  }

  function getCustomers(){
    
    global $db;

    $domainLink = DOMAIN_LINK . "customers/";
    $customers = $db->query("SELECT id,
    first_name,
    last_name,
    email,
    current_balance,
    account_number,
    CONCAT('$domainLink', image) as image,
    phone_number,
    address
    FROM customers");

    return $customers;

  }

?>