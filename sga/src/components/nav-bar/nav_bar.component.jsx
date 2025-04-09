import React from "react";
import { FaUser } from "react-icons/fa"; 
import { Link} from "react-router-dom"
import Logo from "../../assets/Logo_SGA.png";
import "./nav_bar.styles.css"; 

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar-logo">
        <Link to= "/">
           <img src={Logo} alt="Logo" />
        </Link> 
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/accesorios">Accesorios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <div className="navbar-login">
        <Link to="/login">
          <FaUser className="login-icon" />
          <span>Ingresar</span>
        </Link>
      </div>

      
    </div>
  );
};

export default Navbar;
