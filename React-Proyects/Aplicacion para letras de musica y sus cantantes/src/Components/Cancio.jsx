import React from 'react';

const Cancion = ({letra}) => 

{  
    if(letra.length === 0)return null;
    return(
    
    <div>
        <h3>Letra buscada</h3>
           <p>{letra}</p>
    </div>
);
} 
export default Cancion;