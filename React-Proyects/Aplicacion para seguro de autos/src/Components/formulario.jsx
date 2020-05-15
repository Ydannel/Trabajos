import React, {useState} from 'react';
import {obtenerdiferenciayear, calcularmarca, obtenerplan} from './helper';

const Formulario = ({guardarresumen}) => {
    const [data, guardardata]= useState({
        marca:'',
        year: '',
        plan:''
    });
     //extraer la data del state
     const {marca, year, plan} = data;
    
     //leer la data
     const obtenerdata  = e => {
         guardardata({
             ...data,
             [e.target.name] : e.target.value
         })
        
     }
         //si estan vacios los campos, se activara el estado de error 
          const [error, guardarError] = useState(false);

      //optener data
      const cseguro = e => {
          e.preventDefault();
          if (marca.trim() === '' || year.trim() ==='' || plan.trim() ===''){
            guardarError(true);
            return;
        }
        guardarError(false);
         //base de 2000
         var resultado = 2000;
        //obtener diferencia de tiempo
         const diferencia = obtenerdiferenciayear(year);
        //por cada anio hay que restar el 3%
           resultado -=((diferencia * 3) * resultado)/100;
           
        // al americano 15%
        //al asiaico 5%
        //europeo 30%
        resultado =calcularmarca(marca) * resultado;
        //basico aumenta 20%
        //completo es un 50%
         const incrmentoplan = obtenerplan(plan);

         resultado = parseFloat( incrmentoplan * resultado).toFixed(2);
         console.log(resultado)
        //totales
        guardarresumen({
            cotizacion : resultado,
            data
        })
      }
     

    return ( 
        <div> 
             {// si esta vacio, mostrara un alert de error
            error ? 
            <div className="alert alert-danger" role="alert"><i className="fas fa-exclamation-triangle"></i> Los campos son obligatorios
                 
            </div>
            : null}

            <form className="text-center border border-dark p-5"  onSubmit={cseguro}>
                <label className="custom-control">Marca</label>
                    <select className="browser-default custom-select" name="marca" value={marca} onChange={obtenerdata}>
                        <option value="" disabled selected>Selecciona</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                    <label className="custom-control">Ano</label>
                        <select className="browser-default custom-select" name="year" value={year} onChange={obtenerdata} >
                            <option value="" disabled selected>Selecciona</option>                       
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                        </select>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="defaultInline1" name="plan" value="basico" checked={plan ==="basico"} onChange={obtenerdata} />
                            <label className="custom-control-label" for="defaultInline1">Basico</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="defaultInline2" name="plan" value="completo" checked={plan ==="completo"} onChange={obtenerdata}/>
                            <label className="custom-control-label" for="defaultInline2">Completo</label>
                            </div>
                            
                            <br/><br/><br/>
                      <button type="submit" className="btn btn-block btn-outline-elegant">Solicitar la cotizacion  <i class="fas fa-file-alt fa-2x"></i></button>
              </form>
        </div>
     );
}
export default Formulario;