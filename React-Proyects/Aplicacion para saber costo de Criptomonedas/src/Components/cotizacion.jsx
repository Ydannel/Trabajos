import React from 'react';
const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return ( 
  <div>
     <div class="alert alert-dark" role="alert">
                El resultado es:  {resultado.PRICE}
            </div>
                <div class="alert alert-success" role="alert">
                El precio mas alto es:  {resultado.HIGHDAY}
            </div>
            <div class="alert alert-danger" role="alert">
                El precio mas bajo es:  {resultado.LOWDAY}
            </div>
            <div class="alert alert-dark" role="alert">
                La variacion de uktimas 24h es:  {resultado.CHANGEPCT24HOUR}
            </div>
            <div class="alert alert-dark" role="alert">
                Ultima actualizacion  {resultado.LASTUPDATE}
            </div>
  </div>
     );
}
export default Cotizacion ;