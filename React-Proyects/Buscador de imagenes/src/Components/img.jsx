import React from 'react';
const Imagen = ({imagen}) => {
    //extraer 
    const{largeImageURL, likes, previewURL, tags, views } =imagen;
    return ( 
        <div>
            <div className="card-deck">
                   <div className="card">
                       <img src={previewURL} alt={tags} className="card-img-top"/>
                       <div className="card-body">
                           <p className="card-text">{likes} <i class="fa fa-heart-o"></i> Me gusta</p>
                           <p className="card-text">{views} Vistas</p>
                       </div>
                       <div className="card-footer">
                          <a href={largeImageURL} target="_blank" rel="noopener noreferrer"  className="btn btn-block btn-elegant">Ver Imagen</a>
                       </div>
                   </div>

            </div>
        </div>
     );
}
 
export default Imagen;