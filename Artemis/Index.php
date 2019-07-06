<?php
session_start();
include_once "Conexion.php";
@$user=$_GET['user'];
@$pass=$_GET['pass']; 
@$query=("SELECT Usuario ,Contrasenia FROM Usuario "."WHERE Usuario='".mysql_real_escape_string($user)."' and "
. "Contrasenia='".mysql_real_escape_string($pass)."'");

$rs= mysql_query($query);
$row=mysql_fetch_object($rs);
$nr = mysql_num_rows($rs);
if($nr == 0){
  //echo'<script type="text/javascript"> alert("Datos erroneos, intentar de nuevos"); window.location.href=".php"; </script>';
}
else if($nr == 1) {
header("Location:Inicio.php");
}
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
  <header class="header"> <img src="sources/1.png" width="100%" height="210"> </header>

  <div class="content-body">
  
    <aside class="ads">
    <br><br><br><br><br><br><br><br><br>
    <br><br>
        <p class="titulo">No habia sido mas facil comprar</p>
 <br>
  <p class="letra">ahora puesdes hacer tus compras online, <br>
  de una manera mas facil y sencilla!
  </p>
  <br><br><br><br>
  <div class="formulario">
   <img src="sources/6.png"   width="100" height="100">
  </div>
   <br>
<p class="letra">
Tienes la disponibilidad de comprar <br>articulos de ultima moda
</p>
<div class="formulario">   <img src="sources/7.png"  width="100" height="100">  </div>
 <br>
<p class="letra">
Como amamos a nuestros clientes, <br> siempre ofreceremos un buen servicio para ustedes!
</p>
    </aside>

        <main class="content" id="imgs" >
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <form class="formulario" action="" method="GET" id = "Formular1o"> 
<p class="letra" name = "user"> Usuario <br> <input type="text" class="redondo"  placeholder="Su usuario" name="user" required  /></p>
<p class="letra" name = "pass" >Contraseña <br> <input type="password"   class="redondo"   placeholder="Su Contraseña" name="pass"  required /></p>
<p class="Enviarr" name = "Check_Envio">Para iniciar sesion, solo da click en iniciar sesion <br> <button id="botoncito" type = "submit" method = "POST" action = "" class="Enviar buton1" > 

Inicia sesion</button> </p>

</P>

</form>
    </main>
  </div>
  
  <footer class="footer">
  <img src="sources/5.png" width="100%" height="50">
  
  </footer>
</div>

<script>
var foto=document.getElementById("imgs");
foto.style.backgroundImage="url(sources/2.jpg)";
foto.width = 800;
foto.height = 300;
</script>

</body>
</html>