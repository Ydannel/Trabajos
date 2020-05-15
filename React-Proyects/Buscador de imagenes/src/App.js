import React, { useState, useEffect } from 'react';
import './index.css';
import FORMULARIO from './Components/Form';
import LISTA from './Components/visor';

function App() {
  const [busqueda, guardarbusqueda] = useState('');
  const [imagenes, guardarimg]=useState([]);
  //para paginador
  const [pagina, guardarpag] = useState(1);
  const [total, guardartotalpag]= useState(1);

  useEffect(
    ()=>{
      const buscaai = async () =>{
        if(busqueda === '')return;

      const imagenespag = 30;
      const key ='13169014-17163caa6524fc43300404d1b';
      const url =`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenespag}&page=${pagina}`;
      const request = await fetch(url);
      const result = await request.json();
      guardarimg(result.hits);
      //calcular el total de paginas para el paginador 
      const calcular = Math.ceil(result.totalHits / imagenespag);
      guardartotalpag(calcular)

      //al dar click a algun boton, la pagina vuelva hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({
        behavior: 'auto'
      })


      }

      buscaai();

      //para que recargue otras 30 imagenes mas, se le pasa como dependencia 
      //al use effect para que haga un llamado a la api
    }, [busqueda, pagina]);

    //paginadores
     const paginaAnt= () =>{
       const nuevo = pagina -1;
       //si pasa de cero, debe de retornar
       if(nuevo === 0) return;
       guardarpag(nuevo);
       
     }
     const paginaSig= () =>{
      const nuevo = pagina +1;
      //si pasa de cero, debe de retornar
      if(nuevo > total) return;
      guardarpag(nuevo);
    }
  return (
    <div className="App container">
      <br/> <br/> <br/>
       <div className="jumbotron jumbotron-fluid">
         <p className="display-4 text-center"> Buscador de imagenes</p>
        <FORMULARIO
        guardarbusqueda={guardarbusqueda}
        />
       </div>
       <div className="row justify-content-center">
         <LISTA
         imagenes={imagenes}
         />  
         
            {//ocultar los botones segun se necesite
            }
            { 
               (pagina === 1) ? null: (
           <button className="btn  btn-elegant" onClick={paginaAnt} > &laquo;Anterior </button>    
            )
              }
              {
                (pagina === total)? null : (
                  <button className="btn  btn-elegant" onClick={paginaSig}> Siguiente &raquo;</button>
       
                )
              }
         
       </div>
    </div>
  );
}
export default App;