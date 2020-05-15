import React, {useState, useEffect} from 'react';
import './index.css';
import axios from 'axios';
import Quest from './Components/formulario';
import  HEADERS from './Components/header';
import  RESULTADO from './Components/cotizacion';
function App() {
   const [moneda, guardarmoneda] = useState('');
   const [cripto, guardarcriptom] = useState('');
   const [resultado, guardarresultado] = useState({});
   //calcular las criptomonedas
   useEffect( ()=> {
     const calculo = async () =>{
            //se evita la ejecucion
            if(moneda === '')return;
            //ai para la cotizacion
           const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
           const resultado = await axios(url);
         guardarresultado(resultado.data.DISPLAY[cripto][moneda]);   
     }
       calculo();
   } , [moneda, cripto]);
  return (
    <div className="App">
      <HEADERS></HEADERS>
      <Quest
      guardarmoneda={guardarmoneda}
     guardarcriptom = {guardarcriptom}
      />
      <RESULTADO
      resultado ={resultado}
      />
    </div>
  );
}
export default App;