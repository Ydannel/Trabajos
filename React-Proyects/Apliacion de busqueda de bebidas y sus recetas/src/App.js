import React from 'react';
import './index.css';
import CategoriasProvider from './Context/categoria_context';
import RecetasProvider from './Context/ResetasContext';
import Lista from './Components/Lista';
import ModalProvider from './Context/Modal'
import Formulario from './Components/formulario';
function App() {

  return (
   <CategoriasProvider>
     <RecetasProvider>
       <ModalProvider>
            <div className="App">
              <Formulario></Formulario>
              <Lista></Lista>
           </div>
       </ModalProvider>
        
     </RecetasProvider>
       
   </CategoriasProvider>
    
  );
}

export default App;
