import React , {useState} from 'react';

function Saber_presupuesto(props){

    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props;


    //crear los state 
    const [cantidad, guardarCantidad] =useState(0);
    const [error, guardarError ] = useState(false);

    const crearPresupuesto = e => {
        //no carga tan alocado
        e.preventDefault();
        
        //validar
       if (cantidad <=1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);

    }
    return(
    <div> 
       
           
      <form className="text-center border border-light p-5" 
        onSubmit={crearPresupuesto}
        > <h3>Coloca tu presupuesto</h3>
         {error ? <h5 className="alert alert-danger">El numero no es valido</h5> : null}
            <input
            onChange ={e => guardarCantidad(parseInt(e.target.value), 10)}
             /*
            value={cita.propietario}*/
                type="number"
            name="propietario"
            className="form-control mb-4"
            placeholder="Agrega tu presupuesto"
            required
            />
             <button className="btn btn-success btn-lg btn-block" type="submit">Guardar mi presupuesto</button>
               
        </form>  
    </div>
      );
}
export default Saber_presupuesto;
 