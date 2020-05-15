import React from 'react';

const Info = ({info}) => {
    //object.keys funciona para saber si un objeto viene vacio o no
    if(Object.keys(info).length === 0) return null;
    //metodo
     const {
        strArtistThumb, strGenre, strBiographyES
     } =info;

    return ( 
        <div className= "card border-light">
            <div className="card-header text-light font-weight-bold"> Informacion del artista</div>
               <div className="card-body"> 
                 <img src={strArtistThumb} className="card-img-top" alt="img logo"/>
                 <p className="card-text">Genero {strGenre}</p>
                 <h2 className> Biografia</h2>
                 <p> {strBiographyES}</p>
                </div>
        </div>
     );
}
 
export default Info;