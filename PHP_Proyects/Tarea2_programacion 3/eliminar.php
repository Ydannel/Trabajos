<?php
include 'conexion.php';
$ide =$_GET['Cedula'];
$sql ="DELETE from formulario where Cedula='".$ide."'";
mysql_query($sql);
header("location:Action.php");
         ?>