//Unico es Cita en el video 
import React from 'react';
//aqui se muestra el objeto de la informacion de cita
const Unico = ({cita, eliminarCita})=> {
    return(
<div className="mt-3">
    <div className="media-body">
        <h3 className="mt-0">
            {cita.mascota}

        </h3>
        <p className="card-text">
            <span>
                Nombre del dueno: 
            </span>
            {cita.propietario}
        </p>
        <p className="card-text">
            <span>
                Fecha: 
            </span>
            {cita.fecha}
        </p>
        <p className="card-text">
            <span>
              Hora:
            </span>
            {cita.hora}
        </p>
        <p className="card-text">
            <span>
                Sintomas
            </span>
        </p>
        <p>
        {cita.sintomas}
        </p>
        {/** con el arrow function, el tiene que esperar para ejecutarse*/}
        <button className="btn btn-danger" onClick={()=>eliminarCita(cita.id)}>Borrar cita &times;</button>
    </div>



    </div>

);
}
export default Unico;