import React, {Component} from 'react';
import foto4 from '../fotos/4.svg';
import '../index.css';
class Header extends Component{
    render(){

return(
 <div> 
 
        <nav className="navbar navbar-expand-lg navbar-light bg-light head ">
               <h5 className="navbar-brand text-center"> <img src={foto4} width="100%" height="100%" alt="cute"/> Clima  
              </h5>
              
              </nav>   
</div>
     );
    }
}

export default Header;