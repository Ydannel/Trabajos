<?php
include 'Conexion.php';
$sql ="select Nombre,Foto, Precio from Articulo where Existencia >0";
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

        <main class="content">
          <br><br><br><br><br><br><br><br><br>
    <br><br>
      <br><br><br><br><br><br><br><br>
        <p class="titulo">Ultimos articulos agregados</p>

        <?php 
        while ($filas=mysql_fetch_assoc($resultado)) { 
     ?>

        <div class="gallery">
    <p class="letra"><?php echo $filas['Nombre'] ?> </p>
    <img  class="galeria" src="Articulos/<?php echo $filas['Foto'] ?>" alt="Cinque Terre" width="600" height="400">
  <div class="desc"><p class="rojo">Precio:<p class="letra"> <?php echo $filas['Precio'] ?></p> </p></div>
</div>
<?php 
}?>

    </main>
  </div>
  
  <footer class="footer">
  <img src="sources/5.png" width="100%" height="50">
  
  </footer>
</div>
</body>
</html>