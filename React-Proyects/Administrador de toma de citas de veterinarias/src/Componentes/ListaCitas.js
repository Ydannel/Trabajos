import React from 'react';
import Unico from './Unico';
const ListaCitas =({citas, eliminarCita}) =>{
    //imprimir el mensaje en base si hay citas o no con operador ternario
    const mensaje = Object.keys(citas).length ===0 ? 'No hay citas' : 'Administrador de citas';

return(
   <div className="card mt-2 py-5">
       <div className="card-body">
           <h2 className="card-title text-center">
               {mensaje}
               </h2>
               {/** AQUI SE MOSTRARAN LAS CITAS GUARDADAS */}
               <div className="text-center">
                   {citas.map(cita => (
                        <Unico
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
                        />
                     
                            
                   ))}
                   </div>
                    
            </div>
        </div>



);


}

export default ListaCitas;