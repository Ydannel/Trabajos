import React, {useState} from 'react';

const Formulario = ({guardarbusqueda}) => {
    const [termino, guardartermino] = useState('');
    
    const buscarImg = e =>{
        e.preventDefault();
        guardarbusqueda(termino);

    }


    return ( 
       <div>
            <form class="md-form input-group mb-3" onSubmit={buscarImg}>
                <input type="text" className="form-control" placeholder="Busca una imagen....." 
                    required onChange={ data => guardartermino(data.target.value)}
                    />
                <div class="input-group-append">
                    <button className="btn btn-md btn-outline-dark waves-effect" type="submit" >Buscar imgaen</button>
                </div>
             </form>

       </div> 
     );
}
 
export default Formulario;