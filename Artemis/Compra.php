<?php
include 'Conexion.php';
$sql1 ="select  Nombre from Clientes";
$resultado1=mysql_query($sql1);

$sql2 ="select  Usuario from Usuario";
$resultado2=mysql_query($sql2);

$sql3 ="select Id_art, Nombre, Costo, Precio, Existencia from Articulo where Existencia >0";
$resultado3=mysql_query($sql3);


?>

<html>
<head>
<link rel="stylesheet" type="text/css" href="css/estilos.css">
<link rel="alternate" media="print" href="Artemis.pdf" />
<script src = "Js\Compra.js"></script>
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
    <br><br>  <br><br><br><br>
    <p class="letra">
         <br>
         <p class="letra"> Imprimir factura</p>
         <p class="letra"><img src="sources/17.png" width="50" height="50" onclick="javascript:imprim1(imprimir);"></a>
         
         <p class="letra">Nueva Factura</p>
         <a href="Compra.php"> <p class="letra"><img src="sources/16.png" width="60" height="60"> </a>
         
         <p class="letra">Volver a inicio</p>
         <a href="Inicio.php"> <p class="letra"><img src="sources/8.png" width="50" height="50"> </a>
  </p>
    </aside>

        <main class="content2" >
        <br><br><br><br><br>  <br><br><br><br><br>  <br><br><br><br><br>  <br><br><br><br><br>

        <form class="formulario"  method="POST" action=""  id="imprimir"> 
          <!-- *******************************FECHA Y HORA ********************************************-->
        <p class="fecha"><?php 
        date_default_timezone_set("America/Santo_Domingo");
        echo "Dia:  " . date("d/m/y") ; echo ", " . date("h:i:sa");?></p>

        <label for="country">Cliente</label>
    <select id="country" name="Cliente">
    <option value="">Ninguno</option>
    <?php

while ($filas1=mysql_fetch_assoc($resultado1)) { 
     ?>
   
      <option value=""><?php echo $filas1['Nombre'] ?></option>
      <?php 
}
?> </select>

      <label for="country">Vendedor</label>
    <select id="country" name="Cliente">
    <option value="">Ninguno</option>
    <?php

while ($filas2=mysql_fetch_assoc($resultado2)) { 
     ?>
      
      <option value=""><?php echo $filas2['Usuario'] ?></option>
      <?php 
}
?>
      </select>
<p class="letra" id="myBtn"><img src="sources/18.png" id="myBtn" whidth="30" height="30" >Buscar Articulos</p>

<!-- TABLA DE MODAL -->
<div id="myModal" class="modal">

  <!-- CONTENDIO DE MODAL -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <table class="tabla_art" cellspacing="7"  width="100%" id="one">
            <thead class="thead-dark">
                  <tr>
                        <th class="th_art"><p class="blanco_art">Nombre</p></th>
                        <th class="th_art"><p class="blanco_art">Precio</p></th>
                        <th class="th_art"><p class="blanco_art">Disponibles</p></th>
                        

                  </tr>
            </thead>
            <tbody id="Contenedor">
            <?php

while ($filas3=mysql_fetch_assoc($resultado3)) { 
     ?>
                  <tr data-selected="0">
                      
                  <td class="td_art"><?php echo $filas3['Nombre'] ?></td>
                        <td class="td_art" name="precio" id="a"><?php echo $filas3['Precio'] ?></td>
                        <td class="td_art" name="cant"> <?php echo $filas3['Existencia'] ?></td>
                        <td class="td_art" name="cantid"style="display:none;" ><input type="text"></td>
                      <td><input type=hidden value="<?php echo $filas3['Id_art'] ?>" ></td>                          
                        
                      
<?php 
}
?>
            </tbody>
      </table>
      <p class="letra"  id = "Escuchador"><button  id="botoncito" type = "submit" method = "POST" action = "" class="buton3"> <img src="sources/16.png" whidth="50" height="50">Agrega al carrito</button></p>
     
  </div>

</div> 
<!-- tabla DOS -->
<table class="tabla_art" cellspacing="7"  width="50%" id="two">
    <thead class="thead-dark">
          <tr>
                <th class="th_art"><p class="blanco_art">Nombre</p></th>
                <th class="th_art"><p class="blanco_art"> Precio</p></th>
                <th class="th_art"> <p class="blanco_art">Disponibles</p></th>
                <th class="th_art"> <p class="blanco_art">Cantidad</p></th>
                <th class="th_art"> <p class="blanco_art">Precio neto</p></th>
          </tr>
    </thead>
    <tfoot>

<tr>

    <td id = "arro"colspan=3>Total</td>

    <td></td>

</tr>

</tfoot>
    <tbody>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    </tbody>
</table>
<!-- BOTON COMPRAR -->

<p class="Enviarr" name = "Check_Envio"> <br> <button id="botoncito" type = "submit" method = "POST" action = "" class="buton3" > 
<img src="sources/6.png" width="50" height="50">
Comprar</button> </p>
<div id = "But1">
<input  id="botoncito" type = "hidden" >
 </div>

</P>

</form>
 <script type="text/javascript">
 console.log(cantidad);
 /////PROCESO DE ACTUALIZAR DATA 

</script>
  <?php 
 mysql_query("UPDATE Articulos set  Existencia = Existencia +(-'<script>document.write(cantidad);</script>') where Nombre='<script>document.write(nombresArticulos.push(fila.cells[0].innerText));</script>'");
 ?>

    </main>
  </div>
  
  <footer class="footer">
  <img src="sources/5.png" width="100%" height="50">
  
  </footer>
</div>

<script>
// Get the modal
var modal = document.getElementById("myModal");

// variable para el calculo del total

var total = 0 ; 

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }  
}
/******COPIAR LOS DATOS DE MODAL A TABLA**** */
var oneTbody = document.querySelector("#one tbody"),
	twoTbody = document.querySelector("#two tbody"),
	copy = document.querySelector("#Escuchador"),
  newDiv = document.getElementById("But1"),
  seleccion = [],
  preciosSeleccionados = [],
  cantidad,
  nombresArticulos = [],
  limiteArticulos;


var seleccionar = function(event){
		if (event.target.tagName == "TD"){
			 var fila = event.target.parentNode;
      
       ObtenerD();

			if (fila.dataset.selected < 1){
				fila.style.backgroundColor = "gray";
				fila.style.color = "white";
				fila.dataset.selected = 1;
        preciosSeleccionados.push(fila.cells[1].innerText + "_" + fila.cells[2].innerText);
        nombresArticulos.push(fila.cells[0].innerText);
        fila.cells[3].innerText = cantidad;
				seleccion.push(fila);
			}
			else{
				fila.style.backgroundColor = "";
				fila.style.color = "";
				fila.dataset.selected = 0;
				seleccion.splice(seleccion.indexOf(fila), 1);				
			}			
		}
  };
  
var copiar = function(){
		if (seleccion.length){
			for (var i = 0, l = seleccion.length; i < l; i++){
				var tr = twoTbody.insertRow(),
					celdas = seleccion[i].querySelectorAll("td");
          
				for (var j = 0, m = celdas.length; j < m; j++){
					var td = tr.insertCell();				
					td.innerHTML = celdas[j].innerHTML;
				}

				seleccion[i].style.backgroundColor = "";
				seleccion[i].style.color = "";
				seleccion[i].dataset.selected = 0;
			}
    seleccion.length = 0;
    }

  }

var calcular = function (e){
  e.preventDefault();
  var Sumatoria = "";

  if(preciosSeleccionados != null || preciosSeleccionados[0] != ""){
    
    for(var contador = 0 ; contador < preciosSeleccionados.length; contador++){
      
      sumatoria = parseInt(preciosSeleccionados[contador].split("_")[0]);
    
      total = total + sumatoria;
      
    }
    preciosSeleccionados = [];
    var totaln = document.getElementById("arro");
    var suma = total * cantidad;
    var ITBS = suma * 0.018;
    totalAcobrar = suma + ITBS;

  

    totaln.innerText = totalAcobrar;
    }
    
}
var ObtenerD = function(){

  do{
      cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"));
    }while(cantidad == 0 || cantidad > limiteArticulos);
  }
oneTbody.addEventListener("click", seleccionar, false);
copy.addEventListener("click", calcular,false);
copy.addEventListener("click", copiar, false);

</script>


</body>
</html>