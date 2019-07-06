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
        <p class="titulo"> Guardar nuevo cliente</p>
<form class="formulario" action="Clientes.php" method="GET" id = "Formular1o"> 

<p class="Cedula" name = "cedula"> Cédula: <br> <input type="text" class="redondo"  placeholder="Cedula del cliente" name="Cedula" id = "Input_Nombre" required  /></p>
<p class="Cedula" name = "nombre" >Nombre: <br> <input type="text"   class="redondo"   placeholder="Nombre del cliente" name="Nombre" id = "Input_Apellido" required /></p>
<p class="Cedula" name = "correo">Correo: <br> <input type="email"  class="redondo"  placeholder="Correo del cliente" name="Correo" id = "Input_Telefono" required /></p>
<p class="Cedula" name = "telefono">Teléfono: <br> <input type="number"  class="redondo"  placeholder="Telefono del cliente" name="tel" id = "Input_Telefono" required /></p>
<p class="Cedula" >Foto<br> <input type="file" name="Foto" accept="image/*" required></p>

<p class="Enviarr" name = "Check_Envio"> <br> <button id="botoncito" type = "submit" method = "POST" action = "" class="buton2" > 
<img class="borde" src="sources/14.png" width="30" height="30">
Guardar Cliente</button> </p>
<a href="Clientes.php" class="rainbow-button" alt="Volver a Clientes"></a>
 
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