import React from 'react';

const Resumen = ({data}) => {
    //extraer data
    const {marca, year, plan}=data;
    if (marca === '' || year === '' || plan === '')return null;
    return ( 
       <div className="card card-dark">
           <h2>Resumen</h2>
        <ul>
            <li>
                Marca: {marca}
            </li>
            <li>
                Plan: {plan}
            </li>
           <li>
               Anio {year}
           </li>
        </ul>
       </div>
       
     );
}
 
export default Resumen;