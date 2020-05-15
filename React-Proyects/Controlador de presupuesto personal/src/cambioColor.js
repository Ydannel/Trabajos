export const revisarPresupuesto = (presupuesto, restante) =>{

    var clase; 
    //si es 25%

    if ((presupuesto/4)> restante){
        clase ='alert alert-danger';
    }
    //si es el 50%
    else if ((presupuesto/2) > restante) {
        clase='alert alert-warning';
    } 
    else{
        clase='alert alert-success';
    }
   return clase;
}