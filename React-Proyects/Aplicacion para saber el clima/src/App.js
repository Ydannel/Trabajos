import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './Componentes/Header.js';
import    './index.css';

import Formulario from './Componentes/Formulario.js';
import Clima from './Componentes/Clima.js';

function App() {

  //realizacion de el state principal 
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais]= useState('');
  const [resultado, guardarResultado]= useState({});

  //cargar los datos de la api con use efect 
  //este funciona tanto como componentDidMount y componentDidUpdate

  useEffect( () => {
    //prevenir ejecucion
    if (ciudad === '')return;

      //API 
      const consultarAPI =  async() =>{
        const appId ='9e34f381cb6cf877b16bcb1e39d64d0b';
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        //realizar el fetch
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
       guardarResultado(resultado);
      }

        consultarAPI();
  }, [ciudad, pais]);


   


  //validar la info del usuario desde la app principal
  const datosConsulta = datos =>{
    console.log(datos);
    //ciudad y pais existen, agregar
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    
  }
  return (
    <div className="App fondo">
       <Header/>
      <div className="container fondo color"><br/><br/>
        <Formulario datosConsulta={datosConsulta}/>
        <br/><br/>
      </div>
      <div className="container">
      <Clima resultado={resultado}/>
      <br/><br/><br/><br/>
      </div>
     
    </div>
  );
}

export default App;
