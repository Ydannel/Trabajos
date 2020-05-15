import React, {Component} from 'react';
import './index.css';
import Navbar from './componentes/Navbar.js';
import ListaNoticias from './componentes/ListaNoticias.js';
import Formulario from './componentes/Formulario.js';


class App  extends Component {

  state ={
    noticias : []
  }

  //AQUI IRA LA API CON UN COMPONENTE LISTO (los llamados a api se hacen aqui)
  
   async componentDidMount(){
    this.consultarNoticias();
   }
   //es mejor en una funcion que en el componentdid mount po que es mas complicado
   consultarNoticias =async (categoria ='general') =>{
      const url =`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=d71033ded5474995a610277ad4718d07`;
     //extraer datos sin escribir promises
     const respuesta = await fetch(url);
     // retornando la respuesta
     const noticias = await respuesta.json();
     console.log(noticias.articles);
      this.setState({noticias : noticias.articles})

   }
   

  render(){
  return (
     <div className="App">
      <Navbar/>
      <br/>
              <div className="container blanco">
                      <Formulario
                        consultarNoticias={this.consultarNoticias}
                      /><br/><br/>
                      <ListaNoticias
                       noticias={this.state.noticias}
                      />
              </div>
    
     </div>
    
  );
}
}
export default App;
