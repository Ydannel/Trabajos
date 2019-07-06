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
 
        <main class="content4">
        <br><br><br><br><br> 
        <p class="titulo"> Guardar nuevo usuario</p>
<form class="formulario" action="user.php" method="GET" id = "Formular1o"> 

<p class="Cedula" name = "cedula"> Usuario: <br> <input type="text" class="redondo"  placeholder="Usuario" name="user" id = "Input_Nombre" required  /></p>
<p class="Cedula" name = "correo">Correo: <br> <input type="email"  class="redondo"  placeholder=" tu_correo@gmail.com" name="correo" id = "Input_Telefono" required /></p>
<p class="Cedula" name = "nombre" >Contraseña: <br> <input type="password"   class="redondo"   placeholder="Contraseña del usuario" name="pass" id = "Input_Apellido" required /></p>

<p class="Enviarr" name = "Check_Envio"> <br> <button id="botoncito" type = "submit" method = "POST" action = "" class="buton2" > 
<img class="borde" src="sources/14.png" width="30" height="30">
Guardar Usuario</button> </p>
<a href="user.php" class="rainbow-button" alt="Volver a Usuarios"></a></P>
</form>
    </main>
    <aside class="ads1">
    <img src="sources/4.jpg" width="750" height="697">
  </aside>

  </div>
  
  <footer class="footer">
  <img src="sources/5.png" width="100%" height="50">
  
  </footer>
</div>
</body>
</html>