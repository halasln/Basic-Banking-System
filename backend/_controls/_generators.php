<?php

  class Generators{


    public function generateImageId(){
      $cstrong = true;
      return bin2hex(openssl_random_pseudo_bytes(15, $cstrong));
    }

 

  }

?>