import React from 'react';
import telefono from '../img/7.svg';
import info from '../img/14.svg';
import fallecido from '../img/16.svg';
import contagiado from '../img/17.svg';

function Frase({frase}){
    const {todayCases,deaths, cases}= frase
      return(
        <div>
             <section className="uk-section-secondary uk-container uk-container-medium uk-section-large" id="Informacion">
              <h2 className="uk-text-center uk-text-bold">Mas información </h2>
              <div className="uk-flex uk-flex-center">
                <div  className="uk-card uk-card-secondary uk-card-body"> 
                    <p className="uk-text-center uk-text-bold">Si tienes los síntomas llama </p> <img className="uk-align-center" src={telefono} alt=""/> <h1 className="uk-text-center uk-text-bold">*462</h1>     
                </div>
                <div className="uk-card uk-card-secondary uk-card-body uk-margin-left">
                     <p className="uk-text-center uk-text-bold">Aun tienes dudas del tema?</p> <br/>  <a href="https://coronavirusrd.gob.do/"> <img src={info} alt=""/> </a> 
              
                </div>
              </div>
        
              <div>
          <br/> <br/> <br/> 
         </div>  
        <div className="card">
          <h1 className="uk-text-center uk-text-bold">
            Reportes de hoy
          </h1>
          <br/>
             <div className="uk-column-1-3@s uk-column-1-3@m uk-column-1-3@l">
             <div  className="uk-card uk-card-secondary uk-card-body">
                <p  className="uk-text-center uk-text-bold">Casos reportados de hoy <br/></p> 
                 <img className="uk-align-center" width="45%" height="10%" src={contagiado} alt=""/>
                  <p className="uk-text-center uk-text-warning uk-text-bolder">{todayCases}</p>
             </div>
              <div className="uk-card uk-card-secondary uk-card-body uk-margin-left">
                <p className="uk-text-bold uk-text-center">Personas fallecidas <br/> </p> 
                <img className="uk-align-center" width="45%" height="10%" src={fallecido} alt=""/>
                 <p className="uk-text-center uk-text-danger uk-text-bolder">{deaths}</p>
              </div>
              <div className="uk-card uk-card-secondary uk-card-body uk-margin-left">
                <p className="uk-text-center uk-text-bold">Total de casos <br/></p>
                <img className="uk-align-center" width="45%" height="10%" src={info} alt=""/>
                <p className="uk-text-center uk-text-primary uk-text-bolder" >{cases}</p>     
              </div>
             </div>
          
         
        
        </div>
         <br/> <br/> 
              </section>
          
        </div>
      )
    }
    export default Frase;