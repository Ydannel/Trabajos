import React, {Component} from 'react';
import imagen from '../Source/6.png';
//uuid es una dependencia que geenera un id unico como si fuera una base de datos
import uuid from 'uuid';

//reiniciar el formulario

const stateInicial ={

cita:{
     mascota:'',
     propietario:'',
     fecha :'',
     hora :'',
     sintomas :''
 }

}






class Cita extends Component{
state ={...stateInicial}
//metodo que lee que los datos que introduce en inputs (recomendable)
handleChange = e =>{
    console.log(e.target.name + ':'+ e.target.value);
//colocar lo que el usuario escribe en el state
this.setState(
    {           
        cita: {
            //toma una copia del state (recomendable)
            ...this.state.cita,
            //va capturando los datos de los imputs
            [e.target.name] : e.target.value
        }
    }
)


}
 //valida lo  que el usuario manda
 handleSubmit = validar =>
 {
 validar.preventDefault();

//extraer los valores del state

//const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;
//generar objeto con los datos
const nuevaCita ={...this.state.cita};
nuevaCita.id= uuid();
//agregar la cita al state
this.props.crearNuevaCita(nuevaCita)

this.setState({...stateInicial})

 }


render(){

return(

        <div className="container">
             <div className="card">
                  
               <img src ={imagen} width="100%"  height="5%" alt="cute2" />
               
                 {/*formulario*/}
             <div className="card-body">

                 <form className="text-center border border-light p-5" 
                 onSubmit={this.handleSubmit}
                 >
  
                         <p className="h4 mb-4">Formulario de citas</p>
                          {/*nombre-mascota*/}
                                 <label>Nombre de tu mascota </label>
                         <input type="text" 
                          name="mascota" 
                          className="form-control mb-4"
                           placeholder="Nombre de la mascota"
                            onChange={this.handleChange}
                            value={this.state.cita.mascota}
                           required
                        />
                                   {/*nombre - duenio*/}
                                   <label>Tu nombre</label>
                             <input
                                 onChange={this.handleChange}
                                 value={this.state.cita.propietario}
                                 type="text"
                               name="propietario"
                               className="form-control mb-4"
                              placeholder="Tu nombre"
                              required
                             />
                                              <div className="form-group">
                                                  {/*fecha*/}
                                                    <label>Fecha de la cita </label>
                                                        <input type="date" name="fecha"  required onChange={this.handleChange} value={this.state.cita.fecha} className="form-control mb-4"/>
                                                       {/*hora*/}
                                                        <label>Hora  de la cita </label>
                                                    <input type="time" required onChange={this.handleChange} value={this.state.cita.hora} name="hora" className="form-control mb-4"/>
                                              </div>
                          <label>Sintomas</label>
                              <div className="form-group">
                                 <textarea className="form-control rounded-0"
                                   name="sintomas" 
                                  rows="3" 
                                  required
                                  placeholder="Que tiene tu mascota?"
                                   onChange={this.handleChange}
                                   value={this.state.cita.sintomas}
                                  >

                                 </textarea>
                              </div>
      
                                <button className="btn btn-success btn-lg btn-block" type="submit">Solicitar cita para mi mascota</button>
                        
                 </form>
 
             </div>

              </div>
          </div>



);




}


}

export default Cita;