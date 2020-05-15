<?php
@$cedula =$_GET['Cedula'];
@$nombre =$_GET['Nombre'];
@$apellido =$_GET['Apellido'];
@$tipo =$_GET['Tipo3'];
@$Genero=$_GET['sexo'];
@$comentarios =$_GET['Comentarios'];
@$paginaCompleta = true;

/*
echo($cedula);
echo("");
echo($nombre);
echo($apellido);
echo($tipo);
echo($comentarios);
/*
if($cedula == "" || $cedula == null){
    $paginaCompleta = false;
    alert("Por favor complete el campo de cedula para poder continuar");
}else{
    $paginaCompleta = true;    
}

if($nombre == "" || $nombre == null){

    $paginaCompleta = false;
    alert("Por favor complete el campo de nombre para poder continuar");
    
}else{
    
    $paginaCompleta = true;    
    
}

if($apellido == "" || $apellido == null){

    $paginaCompleta = false;

    alert("Por favor complete el campo de apellido para poder continuar");
    
}else{
    
    $paginaCompleta = true;    
    
}

if($comentarios == "" || $comentarios == null){

$paginaCompleta = false;

alert("Por favor complete el campo de comentarios para poder continuar");

}else{
    
$paginaCompleta = true;    
 

}*/
?>

<?php
include 'conexion.php';
$sql ="select * from formulario";
$resultado=mysql_query($sql);

if($cedula!= null || $nombre!= null || $apellido!= null ||$tipo !=null || $Genero!=null ||$comentarios!=null)
{
    $sqls="insert into formulario (Cedula, Nombre, Apellido, Tipo_de_sangre,Genero, Comentarios) values ('".$cedula."', '".$nombre."', '".$apellido."', '".$tipo."','".$Genero."', '".$comentarios."')";
    mysql_query($sqls);
    if ($cedula =1)
    {
        header("location:Action.php");
    }
}


?>

<html>
    <head>
    <link rel="stylesheet" type="text/css" href="estilo.css">
           <body bgcolor="teal">       
            <title>  
  Formulario
  </title>
  <p class="titulo"> Listado de personas</p>

 <div>
 <a class="nuevo" href="Index.html" ><img src="1.png" width="50" height="50"></a>
<table class="tablita">
<thead class="formulario"> 

<tr class="tablita">
<th >  Cedula</th>
<th> Nombre</th>
<th>  Apellidos</th>
<th> Tipo de sangre </th>
<th>  Genero </th>
<th> Comentarios </th>
<th> Opciones</th>
</tr>
</thead> 
<tbody> 
<?php 

while ($filas=mysql_fetch_assoc($resultado)) { 
     ?>
<tr class="veces">
<td> <?php echo $filas['Cedula'] ?></td>
<td> <?php echo $filas['Nombre'] ?></td>
<td> <?php echo $filas['Apellido'] ?></td>
<td> <?php echo $filas['Tipo_de_sangre'] ?></td>
<td> <?php echo $filas['Genero'] ?></td>
<td> <?php echo $filas['Comentarios'] ?></td>
<td> 
<a  class="nuevo" href="editar.php?Cedula=<?php echo $filas['Cedula']?>"> <img src="2.png" width="50" height="50"></a>

<a class="nuevo" href="eliminar.php?Cedula=<?php echo $filas['Cedula']?>"><img src="3.png" width="50" height="50"></a>

</td>
<?php 
} ?>
</tbody>

</table>
 
 </div>
 
    </body>
    </html>