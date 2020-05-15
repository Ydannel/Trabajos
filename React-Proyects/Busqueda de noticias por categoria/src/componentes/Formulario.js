import React, {Component} from 'react';

class Formulario extends Component{
    state ={
        categoria :''
    }
    componentDidMount(){
        this.setState({categoria: 'general'})
    }
    cambiarCategoria = e =>{
        this.setState({
            categoria : e.target.value
        }//cuando la llamada a la api por categoria no responde bien, es mejor hacer un callback
        ,() =>{
             this.props.consultarNoticias(this.state.categoria);
        });
        //pasarlo a la pagina principal para la realizacion de las consultas
        }

  render(){
      return(
            <div className="text center">
                <div>
                   <form>
                       <h2>Categorias</h2>
                       <div>
                         <select onChange={this.cambiarCategoria} className="browser-default custom-select">
                            <option value="general">General</option>
                           <option value="business">Negocios</option>
                           <option value="entertainment">Entretenimiento</option>
                           <option value="health">Salud</option>
                           <option value="science">Ciencia</option>
                           <option value="sports">Deportes</option>
                           <option value="technology">Tecnologia</option>
                         </select>
                           
                       </div>
                       
                   </form>    
                </div>
            </div>





      );
  }




}
export default Formulario;