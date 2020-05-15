import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../Context/categoria_context';
import {RecetasContext} from '../Context/ResetasContext'

const Formulario = () => {
    
    const {categorias } = useContext(CategoriasContext);
    const {buscarRecetas, guardarConsulta} = useContext(RecetasContext )
    const [data, guardardata] =useState({
        nombre:'',
        categoria:''
    });
          //leer la data
     const obtenerdata  = e => {
        guardardata({
            ...data,
            [e.target.name] : e.target.value
        })
    }
      const cseguro = e => {
          e.preventDefault();    
          buscarRecetas(data)  
          guardarConsulta(true)
        }
    return ( 
        <div> 
            <form className="text-center border border-dark p-5 md-form input-group mb-3" onSubmit={cseguro} >
                  <h1>Busca las bebidas por categoria o por ingrediente</h1>
                  <input type="text" className="form-control" placeholder="Busca una bebida....." 
                    required name="nombre" onChange={obtenerdata}
                    />
                    <label className="custom-control"></label>
                        <select className="browser-default custom-select" name="categoria"  onChange={obtenerdata}>
                            <option value="" disabled selected>Selecciona categoria</option>                       
                            {categorias.map(categoria =>(
                                  <option key={categoria.strCategory} 
                                  value ={categoria.strCategory}> {categoria.strCategory}</option>
                            ))}
                        </select>
                        <div class="input-group-append">
                    <button className="btn btn-md btn-outline-dark waves-effect" type="submit" >Buscar</button>
                     </div>
                     </form>
        </div>
     );
}
export default Formulario;