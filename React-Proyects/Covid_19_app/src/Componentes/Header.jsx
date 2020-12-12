import React from 'react';
import '../css/cabecera.scss';
import foto from '../img/3.svg'
// eslint-disable-next-line
const Cabecera = () => {
           

    return ( 
        <>
         <nav>
            <img src={foto} width="8%" height="10%" alt="" /> 
       <ul >
        <li><a   href="#Sintomas">Síntomas</a></li>
        <li><a   href="#Prevencion">Medidas de Prevención</a></li>
        <li><a  href="#Informacion">Mas información </a></li>
    </ul>
</nav>
<header>
    <div className="headline" uk-parallax="bgy: -200">
        <div className="inner uk-text-center uk-text-bold">
            <h1>Covid-19</h1>
            <p>Como afrontar esta enfermedad</p>
        </div>
    </div>
</header>
        </>
     );
}
 
export default Cabecera;