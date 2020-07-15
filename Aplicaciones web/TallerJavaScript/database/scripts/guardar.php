<?php
// mysqli('Servidor','Usuario','Password','Tabla');
    $conexion = mysqli_connect('localhost','root','','datos');

    $correo=$_POST['email'];
    $pass=;$_POST['pass'];
    $age=;$_POST['edad'];
    $pack=;$_POST['paquetes'];

    echo $correo;
    echo $pass;
    echo $age;
    echo $pack;




?>