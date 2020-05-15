import React, {Component} from 'react';
import foto4 from '../fotos/4.svg';
import '../index.css';
class Navbar extends Component{
    render(){

return(
 <div> 
 <div>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fondonav ">
               <h5 className="navbar-brand"> <img src={foto4} width="50%" height="45%" alt="cute"/> Dandole la vuelta al  mundo
              </h5>
              
              </nav>   
</div>
     );
    }
}

export default Navbar;