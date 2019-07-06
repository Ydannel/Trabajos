<?php
include "Conexion.php";
@$user=$_GET['user'];
@$pass=$_GET['pass']; 
@$correo=$_GET['correo'];

if($user!= null || $pass!= null || $correo!= null)
{
    $sqls="insert into Usuario (Usuario, Contrasenia, Correo) values ('".$user."', '".$pass."', '".$correo."')";
    mysql_query($sqls);
    if ($cedula =1)
    {
        header("location:user.php");
    }
}

?>
<?php
include 'Conexion.php';
$sql ="select Id_usu, Usuario, Correo from Usuario";
$resultado=mysql_query($sql);
?>

<html>
<head>
<link rel="stylesheet" type="text/css" href="css/estilos.css">
<meta charset="utf-8">
  </head>
</head>
<body bgcolor="white">
<div class="baner"> </div>

<div class="container">
  <header class="header bar"> <img src="sources/1.png" width="100%" height="210"> 
  <nav>
		<ul>
			<li><a href="Inicio.php"><img src="sources/8.png" width="50" height="50"> Inicio</a></li>
			<li><a href="Clientes.php"> <img src="sources/9.png" width="55" height="55">Tus clientes</a></li>
			<li><a href="Compra.php"> <img src="sources/10.png" width="50" height="50">Caja</a></li>
			<li><a href="Inventario.php"> <img src="sources/11.png" width="50" height="50">Tu almacen</a></li>
			<li><a href="user.php"><img src="sources/12.png" width="60" height="60">Usuarios</a></li>
		</ul>
	</nav>
</header>
  
	

  <div class="content-body">

    
    <aside class="ads2">
    <br><br><br><br><br><br><br><br><br>
    <br><br>  <br><br><br><br><br><br><br><br><br>    
    <br><br>
    <p class="letra">Deseas agregar un nuevo Usuario?
         <br>
         <a href="Formulario_user.php"><img src="sources/15.png" width="60" height="60"></a>
         <br>
  Nuevo Usuario
  </p>
    </aside>

        <main class="content3">
        <br><br><br><br><br>  <br><br><br><br><br>  <br><br><br><br><br>  <br><br><br><br><br>

<p class="titulo">Listado de usuarios</p>
<table class="tabla_art" cellspacing="7"  width="100%">
    <thead class="thead-dark">
          <tr>
                <th class="th_art"><p class="blanco_art">Id</p></th>
                <th class="th_art"><p class="blanco_art">Usuario</p></th>
                <th class="th_art"> <p class="blanco_art">Correo</p></th>
          </tr>
    </thead>
   
    <tbody id="Contenedor">
    <?php

while ($filas=mysql_fetch_assoc($resultado)) { 
     ?>

          <tr>
          <th scope="row"><?php echo $filas['Id_usu'] ?></th>
                <td class="td_art"><?php echo $filas['Usuario'] ?></td>
                <td class="td_art"><?php echo $filas['Correo'] ?></td>         
<?php 
}
?>
    </tbody>
</table>

    </main>
  </div>
  
  <footer class="footer">
  <img src="sources/5.png" width="100%" height="50">
  </footer>
</div>
</body>
</html>