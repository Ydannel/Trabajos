import React, {useState} from 'react';
import '../index.css';

const Formulario = ({guardarbusquedaletra}) =>{

    const [busqueda, guadarBusqueda]=useState({
        artista: '',
        cancion: ''

    });
    const {artista, cancion}=busqueda;
    //si estan vacios los campos, se activara el estado de error 
    const [error, guardarError] = useState(false);

    //FUNCION PARA LEER EL CONTENIDO DE LOS IMPUTS
    const actualizarEstado = e =>{
        guadarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    //consulta de las apis
    const buscarInfo = e =>{
        e.preventDefault();

        if (artista.trim() === '' || cancion.trim() ===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //ya que todo esta correcto, pasa al componente principal
        guardarbusquedaletra(busqueda);
    }
    return(
        <div>
        {// si esta vacio, mostrara un alert de error
            error ? <p className=" alert alert-danger text-center"> Los campos son obligatorios </p>: null

          }
        <div className="container">
        <br/><br/>
            <div className="row"> 
           
                <form className="col card mb-5 pt-5  fondo1 text-white font-weight-bold" onSubmit={buscarInfo}>
                          <fieldset className="text-center">Busqueda de letras 
                          <br/><br/>
                           <div className="row">
                           
                               <div className="col">
                               
                                <input type="text" name="artista" className="form-control" placeholder="Artista"
                                onChange={actualizarEstado}
                                   
                                value={artista}
                                />
                                
                               </div>
                               
                               <div className="col ">
                                    <input type="text" name="cancion" className="form-control" placeholder="Cancion"
                                    onChange={actualizarEstado}
                                    value={cancion}
                                    
                                    />
                               </div>
                           </div>
                           <br/>
                              <button type="submit" className="btn btn-info float-right">Buscar</button>
                           </fieldset>
                </form>

            </div>
        </div>

  </div> 
    );
}
export default Formulario;
