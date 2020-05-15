import React from 'react';

const Resultado = ({cotizacion}) => {
    if (cotizacion ===0  ) return null;
    return ( 

            (cotizacion === 0) ? <div class="alert alert-light" role="alert">
            Elije la narca, el anio del vehiculo y el tipo de seguro
           </div>
           :

             <div class="alert alert-dark" role="alert">
                 Totales: ${cotizacion}
             </div>

         
      );
}
 
export default Resultado;