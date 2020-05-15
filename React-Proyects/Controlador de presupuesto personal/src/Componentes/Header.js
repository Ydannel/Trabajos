import React, {Component} from 'react';
import foto4 from '../fotos/4.png';
import '../index.css';
class Header extends Component{
    render(){

return(
 <div className="letra"> 
 
        <nav className="navbar navbar-expand-lg navbar-light bg-light head ">
               <h5 className="navbar-brand text-center "> <img src={foto4} width="30" height="30" alt="cute"/> Mi presupuesto 
              </h5>
              
              </nav>   
</div>
     );
    }
}

export default Header;