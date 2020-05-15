import React from 'react';
import {revisarPresupuesto} from '../cambioColor.js';
const ControlPreaupuesto = ({presupuesto, restante})=>(

<div className="container">
    <h6 className="alert alert-secondary"> Presupuesto:  ${presupuesto}</h6>
    
<h6 className={revisarPresupuesto(presupuesto,  restante)}> Restante :  ${restante}</h6>

</div>


);
export default ControlPreaupuesto;