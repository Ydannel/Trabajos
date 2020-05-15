
//diferencia de anios
export function obtenerdiferenciayear(year){
    return new Date().getFullYear() - year;
}

//calcular el total a pagar, segun marca

export function calcularmarca (marca){
    var i;
    switch (marca) {
        case 'europeo': i=1.30;
            break;
        case 'americano': i=1.15;
            break;
     case 'asiatico': i=1.05;
            break;
    
                
        default:
            break;
    }
    return i;
}

//calcular el tipo de seguro
export function obtenerplan( plan) {
    return (
        plan === 'basico' 
    ) ? 1.20 : 1.50;
}