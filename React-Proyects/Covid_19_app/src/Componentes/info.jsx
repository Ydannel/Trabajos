import React from 'react';
import definicion from '../img/4.png';
import prevenir from '../img/5.png';
import fiebre from '../img/8.svg';
import tos from '../img/10.jpg';
import cansancio from '../img/9.svg';
import dolor from '../img/11.jpg';
import perdidas from '../img/13.svg';
import erupciones from '../img/12.jpg';


const Informacion = () => {
    return ( 
        <>
         
            <section className=" uk-container uk-container-medium " >
               <h3 className="uk-text-center uk-text-bold">Que es el corona virus?</h3>
               <div> 
                  <img src={definicion} className="uk-align-left" width="50%" height="50%" alt=""/>
                  <p>Es una enfermedad altamente contagiosa, causada por un virus que se puede
                     propagar de persona a persona, esta pertenece a la familia de los coronavirus.
                     El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19.
                           </p>
               </div>
           </section>
           <section className="uk-section-secondary uk-container uk-container-medium uk-section-large" id="Sintomas">
               <h2 className="uk-text-center uk-text-bold">Síntomas</h2>
               <div className=" uk-column-1-3@s uk-column-1-3@m uk-column-1-3@l ">
                  <div className="uk-card uk-card-secondary uk-card-body"> <img src={fiebre}  width="45%"  height="10%" className="uk-align-center" alt=""/> <p className="uk-text-center  uk-button-text">Fiebre</p> </div>
                  <div className="uk-card uk-card-secondary uk-card-body uk-margin-left"><img src={tos}  className="uk-border-circle uk-align-center"  width="45%" height="10%" alt=""/> <p className="uk-text-center  uk-button-text"> Tos Seca</p></div>
                  <div className="uk-card uk-card-secondary uk-card-body uk-margin-left"> <img src={cansancio} className="uk-align-center" width="45%"  height="10%"  alt=""/> <p className="uk-text-center  uk-button-text"> Cansancio</p> </div>
               </div>
               <br/>
               <div className="uk-column-1-3@s uk-column-1-3@m uk-column-1-3@l">
                  <div className="uk-card uk-card-secondary uk-card-body"> <img width="50%" height="20%" className="uk-border-circle uk-align-center" src={dolor} alt=""/> <p className="uk-text-center uk-button-text">Dolores y Molestias</p></div>
                  <div className="uk-card uk-card-secondary uk-card-body uk-margin-left"> <img width="45%"  height="10%" className="uk-align-center" src={perdidas} alt=""/> <p className="uk-text-center  uk-button-text"> Pérdida del sentido del olfato </p> </div>
                  <div className="uk-card uk-card-secondary uk-card-body uk-margin-left"> 
                  <img src={erupciones}  width="45%" height="10%" className="uk-border-circle uk-align-center" alt=""/>
                  <p className="uk-text-center  uk-button-text">Erupciones cutáneas</p> </div>
               </div>
         </section>
           <section className=" uk-container uk-container-medium" id="Prevencion">
           <h2 className="uk-text-center uk-text-bold">Como prevenir el contagio</h2>
             <br/>
             <br/>

             <div >
                <img src={prevenir} className="uk-align-right" width="50%" height="50%" alt=""/>
                     <ul className="uk-list uk-list-circle">
                        <li>Lavarse las manos frecuentemente</li>
                        <li>Mantener el distanciamiento social</li>
                        <li>Usar las mascarillas</li>
                        <li>No saludarse con las manos</li>
                        <li>Evitar las aglomeraciones de personas</li>
                   </ul>
                 </div>
              </section>
        </>
     );
}
 
export default Informacion;