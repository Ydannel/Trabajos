import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.css';
import Cabeza from './Componentes/Header';
import Final from './Componentes/Foot';
import Info from './Componentes/info';
import Frase from './Componentes/covid';
import Boot from './Componentes/bootChat'
function App() {

  const [frase, obtenerFrase] = useState({});
  //obtener una consulta de una API rest
  const consultarAPI = async ()=>{
    const resultado = await axios ('https://corona.lmao.ninja/v2/countries/do')
    obtenerFrase(resultado.data); 
  }
  useEffect(
    ()=> {
      consultarAPI()
    }, [] 
  )   
  return (
    <div className="App">
      <div id="site-content">
             <Cabeza/>
      <br/> 
        <div className="uk-container uk-container-large">
          <Info/>
            <Frase
             frase={frase}/>
        </div>
      </div>
        <Final/>
        <Boot/>
     </div>  
  );
}
export default App;