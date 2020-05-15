import React from 'react';

function Clima({resultado}) {
   
    //extraer valores de la api
    const{name, main} = resultado;
    if(!name) return null;

    //kelvil a celcius

    const kelvin = 273.15;

    
    return (
        <div className="card mb-4">
               <div className="card-body">    
                    <h4 className="card-title">El clima de {name} es: </h4> 
                        <p className="card-text text-center">{parseInt(main.temp -kelvin, 10) } <span>&#x2103;</span></p> 
                        
                        <p className="card-text">Maxima temperatura: {parseInt(main.temp_max -kelvin, 10) }&#x2103;</p> 
                        <p className="card-text">Minima temperatura: {parseInt(main.temp_min -kelvin, 10) } &#x2103;</p> 
                        
                       </div>
    </div>

    )
    
}
export default Clima;