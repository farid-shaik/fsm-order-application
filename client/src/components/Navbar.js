import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Dashboard from "../products/productspage";
import logo from "../images/fsmlogo6.png";
import "../App.css";
import "./component.css";


import { UserContext } from '../App';

const Navbar = () => {

  const {state} = useContext(UserContext);

  

  const RenderMenu = () => {
    if (state) {
      return (
        <>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li>
        </>
      )
    } else {
      return (
        <>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Registration</NavLink>
            </li>
            
        </>
      )
    }
  }




    return (
        <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light navbg sticky">
  <NavLink to="/">
  <img className="logo" src={logo} alt="IITD-AIA Foundation For Smart Manufacturing" /> 
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      
    <RenderMenu />
 
    </ul>
    
  </div>
</nav>
        </>
    );
}

export default Navbar;
