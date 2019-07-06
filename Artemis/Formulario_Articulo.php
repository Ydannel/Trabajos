<html>
<head>
<link rel="stylesheet" type="text/css" href="css/estilos.css">
<meta charset="utf-8">
  </head>
</head>
<body bgcolor="white">
<div class="baner"> </div>

<div class="container">
 <div class="content-body">

    
    <aside class="ads1">
    <img src="sources/3.jpg" width="360" height="695">
    </aside>

        <main class="content2">
        <br><br><br><br><br> 
        <p class="titulo"> Guardar nuevo articulo</p>
<form class="formulario" action="Inventario.php" method="GET" id = "Formular1o"> 



<p class="Cedula" name = "Nombre"> Nombre: <br> <input type="text" class="redondo"  placeholder="Nombre del articulo" name="Nombre" id = "Input_Nombre" required  /></p>
<p class="Cedula" name = "Costo" >Costo: <br> <input type="text"   class="redondo"   placeholder="Costo original del articulo" name="Costo" id = "Input_Apellido" required /></p>
<p class="Cedula" name = "Precio">Precio: <br> <input type="text"  class="redondo"  placeholder="Precio vendido al cliente" name="Precio" id = "Input_Telefono" required title="Tiene que ser mayor al costo"/></p>
<p class="Cedula" name = "Cantidad">Cantidad: <br> <input type="number"  class="redondo"  placeholder="Cantidad del articulo" name="Cantidad" id = "Input_Telefono" required /></p>
<p class="Cedula" >Foto<br> <input type="file" name="Foto" accept="image/*" required></p>

<p class="Enviarr" name = "Check_Envio"> <br> <button id="botoncito" type = "submit" method = "POST" action = "" class="buton2" > 
<img class="borde" src="sources/14.png" width="30" height="30">
Guardar Articulo</button> </p>
<a href="Inventario.php" class="rainbow-button" alt="Volver a Inventario"></a>
 
</P>

</form>

    </main>
    <aside class="ads1">
    <img src="sources/3.jpg" width="360" height="695">
  </aside>

  </div>
  
  <footer class="footer">
  <img src="sources/5.png" width="100%" height="50">
  
  </footer>
</div>
</body>
</html>