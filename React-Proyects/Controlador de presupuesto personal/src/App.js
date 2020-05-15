import React, {useState, useEffect} from 'react';
import Cabecera from './Componentes/Header.js';
import Presupuesto from './Componentes/Saber_presupuesto.js';
import Formulario from './Componentes/Formulario.js';
import Listado from './Componentes/Listado.js';
import Control from './Componentes/control.js';

import './index.css';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const  [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const  [crearGasto, guardarCrearGasto]= useState(false)
  const [gasto, guardarG] = useState({});
  const [gastos, guardarGastos] = useState([]);
   
  //guardar los gastos en otro state
   useEffect(
     () => {
       if(crearGasto){
       const listadoGastos =[...gastos, gasto];
       guardarGastos(listadoGastos);
      //restar el presupuesto actual
      const presupuestoRestante = restante -gasto.cantidadGasto;
      guardarRestante(presupuestoRestante)
      //una vez que se agrega, se pone false
      guardarCrearGasto(false)
      }
     }, [crearGasto]);

  return (
    <div className="App fondo">
      <Cabecera/> 
      <br/>
     <div className="container card">
         <br/>
         {(preguntaPresupuesto) ?
         <Presupuesto
        guardarPresupuesto={guardarPresupuesto}
        guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
        guardarRestante={guardarRestante}
        /> : (
               <div className="row">

                 <div className="col-sm-8">
                    <br/>
                 <Formulario
                 guardarG ={guardarG}
                 guardarCrearGasto={guardarCrearGasto}
                 ></Formulario>
                 </div>
                 <div className="col-sm-4">
                   <br/>
                   <Listado 
                   gastos ={gastos}
                   ></Listado><br/>
                   <Control
                   presupuesto ={presupuesto}
                   restante ={restante}
                   />
                 </div>
               </div>
        )}
      </div><br/>
     </div>
  );
}

export default App;
