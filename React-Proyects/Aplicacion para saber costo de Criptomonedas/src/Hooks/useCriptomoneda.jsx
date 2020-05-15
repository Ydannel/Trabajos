import React, { useState } from 'react';

const useCriptomoneda = (opciones) => {
    //state personalizado
    const [state, actualizarstate] = useState();

    const SeleccionarCripto = () =>(
        <div>
            <label className="custom-control">Elige tu Criptomoneda</label>
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
              <option key ={opcion.CoinInfo.Id} value ={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName} </option>
              )) }
               
            </select>
       </div>
    )
    //retornar el state, que modifica al state
    return [state, SeleccionarCripto, actualizarstate];
}
export default useCriptomoneda;