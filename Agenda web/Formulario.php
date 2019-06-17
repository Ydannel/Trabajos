<html>
<head>
<link rel="stylesheet" type="text/css" href="css/estilos.css">
<meta charset="utf-8">
</head>
<body bgcolor="#b4daed">

<table>

 <tr>
      <td id="blanco">
    
<imput type="hidden">


<br>

  <p class="titulo">Agrega a tus conocidos..</p>
 
  <p class="letra"></p>
         <div class="butons2">
       <img  src="sources/9.png" width="180" height="150">
      </div>
      <br>
<br>
<br>
      <p class="letra"><u>..de una forma mas facil !_______</u></p>
    
<br>
<p class="blanco">Si quieres volver a la pagina anterior, <br>
solo tienes que pulsar la imagen roja!!!
</p>
<div class="butons">
       <a href="Inicio.html"><img  src="sources/11.png" width="50" height="50"></a>
      </div>
    
    <br>


<br>



      </td>
      
      <td>
      <p class="titulos"> Guardar nuevo contacto</p>
<form class="formulario" action="Action.php" method="GET" id = "Formular1o"> 



<p class="Cedula" name = "Nombre"> Nombre: <br> <input type="text" class="redondo"  placeholder="Nombre de contacto" name="Nombre" id = "Input_Nombre" required  /></p>
<p class="Cedula" name = "Apellido" >Apellido: <br> <input type="text"   class="redondo"   placeholder="Apellido de contacto" name="Apellido" id = "Input_Apellido" required /></p>
<p class="Cedula" name = "Telefono">Telefono: <br> <input type="number"  class="redondo"  placeholder="Telefono de contacto" name="Telefono" id = "Input_Telefono" required /></p>

<p class="Enviarr" name = "Check_Envio">Para mandar tus contactos, solo da click en guardar <br> <button id="botoncito" type = "submit" method = "POST" action = "" class="Enviar" > 
<img class="borde" src="sources/10.png" width="30" height="30">
Guardar Contacto</button> </p>

</P>

</form>

 <br>
       
       
        
       </td>
      </tr>
</table>
<script src = "scripts\script1.js"></script>

</body>
</html>