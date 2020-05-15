// Codigo Js para interactuar con el DOM
//formulario.php

var blanco = document.getElementById("blanco");
blanco.style.backgroundColor = "#43baff";
var boton = document.getElementById("botoncito");
boton.addEventListener('mouseover', function () {

    boton.style.background = "#43baff";

})

boton.addEventListener('mouseout', function () {

    boton.style.background = "none";

})

// Interaccion con los metodos Post Fetch

// 1----





var Formulario = document.getElementById("Formular1o");


Formulario.addEventListener('submit', accion => {

    //Event listener para evitar que la pagina recargue y que el uso de la agenda sea Asincrono

    accion.preventDefault();

    var NewForm = new FormData(Formulario);
    // Creacicion de un nuevo form data para poder usar los atributos pertenecientes al formulario html 


var myData ={

nombre: NewForm.get("Nombre"),
apellido: NewForm.get("Apellido"),
telefono: NewForm.get("Telefono")

    // Objeto que sera enviado en el post (Tiene los mismos campos que el Json permite y tiene)

};

fetch("http://www.raydelto.org/agenda.php", {

    method: 'POST',
    body: JSON.stringify(myData)

    //Fetch con metodo post, este se encarga de enviar la data, en este caso, haciendo una conversion a JSON
    
})
.then(resp => resp.json())
.then(respuesta => console.log(respuesta))
.catch(err => console.log(err))
alert("Los datos han sido mandados exitosamente")
Header("location:Inicio.html")
})

