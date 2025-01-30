<?php

header("Access-Control-Allow-Origin:*");      // BORRAR POLITICAS CORS DESPUES DE PROGRAMAR //


//  DESHABILITA LOS ERRORES A LA VISTA DEL USUARIO  //
ini_set('log_errors','0');
ini_set('display_startup_errors','0');

//  ENVIA LOS ERRORES QUE NO VE EL USUARIO A LA CARPETA LOG DEL BACKEND  //

ini_set('log_errors','1');
ini_set('error_log','../LOG/php_errors.php');

class conn{

    function connection(){

    $host = "localhost";
    $usuario = "root";
    $password = "";  
    $bd = "biblioteca";    
    $puerto = 3306;  
    $conn = new mysqli($host, $usuario, $password, $bd, $puerto);   

    return $conn;
    
}


}

?>