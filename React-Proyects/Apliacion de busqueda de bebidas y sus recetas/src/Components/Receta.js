import React, {useContext} from 'react';
import {ModalContext} from '../Context/Modal';

const Receta = ({receta}) => {
    const {guardarid, info} = useContext(ModalContext);
    //mustra los ingredientes
    const mostrar = info =>{
        let ingredientes = []
        //hay que hacer un siclo ya que la info no esta en un array
        for (var i=1; i<16; i++){
            //en caso de que alguno de estos sea nulo, solo traer los que tiene info
            if(info[`strIngredient${i}`]){
                ingredientes.push(
                <li>{info[`strIngredient${i}`]}{info[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }
    return ( 
        <div className="col-md-4 mb-3">
             <div className="card">
                <h2 className="card-header">
                    {receta.strDrink}
                </h2>    
                <img src={receta.strDrinkThumb} alt="mmm"/>
                <div className="card-body">
                    <button className="btn btn-outline-dark btn-block"
                    onClick= {
                        () => {
                            guardarid(receta.idDrink)
                        }
                    }
                    data-toggle="modal" data-target="#receta"
                    >Ver mas</button>
                </div>      
           </div>     
            <section>
                    <div className="modal fade" id="receta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                         <h5 className="modal-title" id="exampleModalLabel">{info.strDrink}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h4>Instrucciones</h4>
                             <p>
                                 {info.strInstructions}
                             </p>
                             <img src={info.strDrinkThumb} className="img-fluid" alt='yolo'/>

                             <h3>Ingredientes y calntidades</h3>
                             <ul>
                                 { mostrar(info)}
                             </ul>
                        </div>
                        
                        </div>
                    </div>
                        </div>
               </section>
        </div>
       
     );      
}
export default Receta;