
<html>
<head>
<link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body bgcolor="teal">
<?php
include 'conexion.php';

@$id=$_GET['Cedula'];
$sql ="select * from formulario where Cedula='".$id."'";
$resultado =mysql_query($sql);
while($fila=mysql_fetch_assoc($resultado))
{
?>
<div>
 <form class="formulario">

  <p class="Cedula" name = "Cedula"> Cedula:
   <br> 
  <input type="hidden" class="redondo" placeholder="Escriba su cedula" name="Cedula" value="<?php echo $fila['Cedula'] ?>"></p>
  <p class="Nombre" name = "Nombre" >Nombre: 
  <br> 
  <input type="text"   class="redondo" placeholder="Su nombre" name="Nombre" value="<?php echo $fila['Nombre'] ?>"></p>
  <p class="Apellido" name = "Apellido">Apellido: 
  <br>
   <input type="text"  class="redondo" placeholder="Su apellido" name="Apellido"value="<?php echo $fila['Apellido'] ?>"></p>
  <p class="Tipo" name= "Tipo2">Tipo de sangre: 
  <br> <select name = "Tipo3"value="<?php echo $fila['Tipo_de_sangre'] ?>">
  
      <option value="AB">AB</option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="O+">O+</option>
      <option value="0-">O-</option>
  
  </select></p>
      
  <p class="Genero">Genero:
      <br class="gen">
      <fieldset class = "Genero" name = "Genero">
      <label>
          <input type="radio" name="sexo" value="Masculino"> Masculino
      </label>
      <label>
          <input type="radio" name="sexo" value="Femenino"> Femenino
      </label>
      </fieldset>
  </p>
  <p class="Comentarios" >Comentarios: <br> <textarea  class="redondo"  name="Comentarios" value ="<?php echo $fila['Comentarios'] ?>" required cols="60" rows="7" ></textarea> </p>
  
  <p class="Enviar" name = "Check_Envio"> <br> <button type = "submit"class="Enviar"  value="Actualizar" >Actualizar</button> </p>
  
  <br>
  <div Class="Enviarr">
  <a class="Enviarr" href="Action.php">Volver</a>
</div>
   </form>
<?php } ?>
  </div>

  <?php
  @$cedulas=$_GET['Cedula'];
  @$nombre =$_GET['Nombre'];
  @$apellido =$_GET['Apellido'];
  @$tipo =$_GET['Tipo3'];
  @$Genero=$_GET['sexo'];
  @$comentarios =$_GET['Comentarios'];
  if($cedulas!= null || $nombre!= null || $apellido!= null ||$tipo !=null ||$comentarios!=null)
{
    //$sql1;
    mysql_query("UPDATE formulario set Nombre='".$nombre."',Apellido='".$apellido."',Tipo_de_sangre='".$tipo."',Genero= '".$Genero."',Comentarios='".$comentarios."' where Cedula='".$cedulas."'");
 
    
}

  
  ?>


</body>
</html>

 