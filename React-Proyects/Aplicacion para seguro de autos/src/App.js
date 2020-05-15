import React , { useState} from 'react';
import './index.css';
import CABEZA from './Components/header';
import FORM from './Components/formulario';
import RESUMEN from './Components/resumen';
import RESULTADO from './Components/resultado'
function App() {
  const [resumen, guardarresumen] = useState ({
    cotizacion : 0,
    data: {
      marca:'',
      year:'',
      plan:''
    }
  })
  const { cotizacion ,data} = resumen;
  return (
    <div className="App fondo">
      <CABEZA></CABEZA>
      <br/>
      <br/>
      <div className="container">
        <FORM guardarresumen ={ guardarresumen} />  
         <RESUMEN
         data ={data}
         />
         <RESULTADO cotizacion={cotizacion}/>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}
export default App;