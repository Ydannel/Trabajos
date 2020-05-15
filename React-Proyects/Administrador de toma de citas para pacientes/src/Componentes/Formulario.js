import React, {useState} from 'react';

//pasa la info a la app
function Formulario({crearCita}) {


    const [cita, actualizarCitas] =useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    });

        //lee datos 
    const handleChange = e =>{
        //cambia el state
        actualizarCitas({
            ...cita,
            [e.target.name] : e.target.value
        });
        
    }

    //para el form

    const enviarCita = e => {
        //no carga tan alocado
        e.preventDefault();
        console.log(cita);
        
        //datos a validar y pasa los datos al componente principal
        crearCita(cita)

        //reiniciar el state
       actualizarCitas({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
       })
    }


    return(
        <div className="card-body">

        <form className="text-center border border-light p-5" 
        onSubmit={enviarCita}
        >

                <p className="h4 mb-4">Formulario de citas</p>
                 {/*nombre-mascota*/}
                        <label>Nombre de tu mascota </label>
                            <input type="text" 
                            name="mascota" 
                            className="form-control mb-4"
                            placeholder="Nombre de la mascota"
                            onChange={handleChange}
                            value={cita.mascota}
                            required
                        />
                             {/*nombre - duenio*/}
                          <label>Tu nombre</label>
                    <input
                       onChange={handleChange}
                        value={cita.propietario}
                            type="text"
                        name="propietario"
                        className="form-control mb-4"
                        placeholder="Tu nombre"
                        required
                        />
                                        <div className="form-group">
                                         {/*fecha*/}
                                           <label>Fecha de la cita </label>
                                               <input type="date" name="fecha"  required onChange={handleChange} value={cita.fecha} className="form-control mb-4"/>
                                              {/*hora*/}
                                               <label>Hora  de la cita </label>
                                           <input type="time" required onChange={handleChange} value={cita.hora}  name="hora" className="form-control mb-4"/>
                                     </div>
                                        <label>Sintomas</label>
                                    <div className="form-group">
                                        <textarea className="form-control rounded-0"
                                        name="sintomas" 
                                        rows="3" 
                                        required
                                        placeholder="Que tiene tu mascota?"
                                        onChange={handleChange}
                                        value={cita.sintomas}
                                        >

                                        </textarea>
                                    </div>

                       <button className="btn btn-success btn-lg btn-block" type="submit">Solicitar cita para mi mascota</button>
               
        </form>

    </div>
    )
}

export default Formulario;
