import React, {useState} from 'react';
import shortid from 'shortid';

//pasa la info a la app
function Formulario(props) {
    const {guardarG, guardarCrearGasto} = props

    const [nombreGasto, guardarGasto] = useState('');
    const [cantidadGasto, guardarCantidad] = useState(0);
     
    const agregarGasto = e => {
        //no carga tan alocado
        e.preventDefault();
         

        //construir un objeto
        const gasto  ={

            nombreGasto,
            cantidadGasto,
            id : shortid.generate()
        }
       guardarG(gasto);
       guardarCrearGasto(true);
    }
    return(
        <div className="card-body">

        <form className="text-center border border-light p-5" 
        onSubmit={agregarGasto}
        >
              
                <p className="h4 mb-4">Agrega tus gastos aqui</p>
                
                        <label>Nombre del gasto </label>
                            <input type="text"  
                            className="form-control mb-4"
                            placeholder="Ej. comida"
                            required
                            onChange ={e => guardarGasto(e.target.value)}
                            value ={nombreGasto}
                        />
                            
                          <label>Cantidad del gasto</label>
                    <input
                    onChange ={e => guardarCantidad(parseInt(e.target.value), 10)}
                            type="number"
                        className="form-control mb-4"
                        placeholder="Ej. $200"
                        required
                        value={cantidadGasto}
                        />
                                      
                       <button className="btn btn-dark btn-lg btn-block" type="submit">Guardar</button>
               
        </form>

    </div>
    )
}

export default Formulario;
