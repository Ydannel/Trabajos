import React from 'react';
import Noticia from './Noticia.js';


const ListaNoticias =({noticias}) =>(
    <div className="container">
    <div>
       {noticias.map(noticia=>(
          < Noticia 
            key={noticia.url}
            noticia={noticia}
          />
       ))
           
       }
    </div>

        
    </div>


);

export default ListaNoticias;