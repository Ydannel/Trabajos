"use strict";

// -- --
// Este script se encarga de pedirle a la pagina : 'http://www.raydelto.org/agenda.php', el archivo JSON
//  Que este tiene para poder mostrarlo en una tabla dentro del html, la cual esta dentro de un contenedor a parte 
//  -- --


var Tabla_llenado = document.getElementById("Contenedor"); 

// Aqui llamamos el contenedor en el cual se pintara la tabla

fetch('http://www.raydelto.org/agenda.php', {

//Metodo fetch como alternativa a AJAX para hacerle un request a la pagina anteriormente mencionada
//, y poder usar los datos de esta misma

method: 'GET'
})
.then(Res => Res.json()) // Promise para la extraccion y uso de los datos en formato JSON
.then(Data => Data) // Promise de respuesta
.catch(err => console.log(err)) // Try Catch para ver si la respuesta del 2do promise presenta errores
.then(Data => {

    // Promise con una arrow Function (Como las anteriores), en la cual se llenan los espacios de la tabla
Tabla_llenado.innerHTML = '';


console.log(Data.length);

for (var i = 15;  Data.length >i; i--){

    if(i < 15){


    Tabla_llenado.innerHTML += `
    
        <tr>
            <th>${Data[i].nombre}</th> 
            <th>${Data[i].apellido}</th> 
            <th>${Data[i].telefono}</th>
        </tr>        
    `
    }else{


        console.log("La tabla es demasiado larga")

    }
}

})
