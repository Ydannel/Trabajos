import React, { useState } from 'react';

const useMoneda = (opciones) => {
    //state personalizado
    const [state, actualizarstate] = useState('');

    const Seleccionar = () =>(
        <div>
            <label className="custom-control">Elige tu tipo de moneda</label>
            <select className="browser-default custom-select" name="marca" 
            onChange={ cambio => 
                actualizarstate(
                    cambio.target.value
                    )}
                    value ={state}
            >
            <option value="" disabled selected>Selecciona</option>
              { //iterar desde el arreglo de objetos MONEDAS, de ahi
              //se saca la data y se hace un ciclo
              opciones.map(opcion=>( 
              <option key ={opcion.codigo} value ={opcion.codigo}>{opcion.nombre} </option>
               ))}
               
            </select>
       </div>
    )
    //retornar el state, que modifica al state
    return [state, Seleccionar, actualizarstate];
}
export default useMoneda;