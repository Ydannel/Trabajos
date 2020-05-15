import React, {useState} from 'react';


function Formulario({datosConsulta}) {

    
    //poner lo estados y como inicirlo
    //busqueda es el state y guardar busqueda cambia el state (es this.setState)
    const[busqueda, guardarBusqueda] =useState({
        ciudad :'',
        pais :''
    })
        //lee datos 
    const handleChange = e =>{
        //cambia el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
        
    }

    //para el form

    const consultarClima = e => {
        //no carga tan alocado
        e.preventDefault();
        //datos a validar y pasa los datos al componente principal
        datosConsulta(busqueda);

    }


    return(
        <div className="container">
            <form className="text-center border border-light p-5" 
                 onSubmit={consultarClima}
                 >
  
                         <p className="h4 mb-4">Saber del clima</p>
                          {/*nombre-ciudad*/}
                                 <label>Ciudad </label>
                         <input type="text" 
                          name="ciudad" 
                          className="form-control mb-4"
                           placeholder="Nombre de la Ciudad"
                            onChange={handleChange}
                            
                           required
                        /><br/>
                         <select 
                          onChange={handleChange}
                          className="browser-default custom-select" name="pais" required>
                            <option value="">Selecciona un pais</option>
                           <option value="US">Estados Unidos</option>
                           <option value="MX">Mexico</option>
                           <option value="AR">Argentina</option>
                           <option value="CO">Colombia</option>
                           <option value="ES">Espana</option>
                           <option value="DO">Republica Dominicana</option>
                         </select>
                         <br/><br/>
                         <button className="btn btn-success btn-lg btn-block" type="submit">Solicitar clima de mi pais</button>
                 </form>
        </div>
    )
}

export default Formulario;
