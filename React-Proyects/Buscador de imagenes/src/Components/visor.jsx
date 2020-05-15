import React from 'react';
import Imagenw from './img'

const Lista = ({imagenes}) => {
    return ( 
        <div className="col-12 p-5 row">
            {
                imagenes.map(
                    imagen =>(
                        <Imagenw
                        key={imagen.id}
                        imagen={imagen}
                        />
                    )
                )
            }
        </div>
     );
}
export default Lista;