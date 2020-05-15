<?php
//
@$nombre =$_GET['Nombre'];
@$costo =$_GET['Costo'];
@$precio =$_GET['Precio'];
@$cantidad =$_GET['Cantidad'];
@$foto=$_GET['Foto'];

?>
<?php
include 'Conexion.php';
$sql ="select Id_art, Nombre, Costo, Precio, Existencia from Articulo where Existencia >0";
$resultado=mysql_query($sql);

if($nombre!= null & $costo < $precio & $cantidad !=null  )
{
    $sqls="insert into Articulo (Nombre, Costo, Precio,Existencia, Foto) values ('".$nombre."', '".$costo."', '".$precio."', '".$cantidad."','".$foto."')";
    mysql_query($sqls);
    if ($cedula =1)
    {
        header("location:Inventario.php");
    }
}?>

<html>
<head>
<link rel="stylesheet" type="text/css" href="css/estilos.css">
<meta charset="utf-8">
  

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

  
    <aside class="ads1">
    <br><br><br><br><br>
    <br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br>    
    <br><br>
    <p class="letra">Deseas agregar un nuevo articulo?
         <br>
         <a href="Formulario_Articulo.php"><img src="sources/13.png" width="60" height="60"></a>
         <br>
  Nuevo articulo
  </p>
    </aside>

        <main class="content1">
        <br><br><br><br><br>  <br><br><br><br><br>  <br><br><br><br><br>  <br><br><br>

        <p class="titulo">Listado de articulos existentes</p>
        <table class="tabla_art" cellspacing="7"  width="100%">
            <thead class="thead-dark">
                  <tr>
                        <th class="th_art"><p class="blanco_art">Id</p></th>
                        <th class="th_art"><p class="blanco_art">Nombre</p></th>
                        <th class="th_art"> <p class="blanco_art">Costo</p></th>
                        <th class="th_art"><p class="blanco_art">Precio</p></th>
                        <th class="th_art"><p class="blanco_art">Existencia</p></th>
                  </tr>
            </thead>
            <tbody id="Contenedor">
            <?php

while ($filas=mysql_fetch_assoc($resultado)) { 
     ?>
                  <tr>
                        <th scope="row"><?php echo $filas['Id_art'] ?></th>
                       
                        <td class="td_art"><?php echo $filas['Nombre'] ?></td>
                        <td class="td_art"><?php echo $filas['Costo'] ?></td>
                        <td class="td_art"><?php echo $filas['Precio'] ?></td>
                        <td class="td_art"><?php echo $filas['Existencia'] ?></td>
                        
                  <?php 
}
?></tbody>
      </table>
    </main>
  </div>
  
  <footer class="footer">
  <img src="sources/5.png" width="100%" height="50">
  
  </footer>
</div>
</body>
</html>