import React from 'react';
import { Link } from "react-router-dom";
//import { formatNumber } from '../formatNumber';
import Logo from '../assets/Img/Logo.PNG';
import '../Styles/navbar.css';



export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
      <Link to="/" className="logo">
          <img className="logo-img" src={Logo} alt="logo" />
      </Link>
      </div>
    <div className="links">
      <Link to="/registro" className="link-menu">Registrate</Link>
      <Link to="/login" className="link-menu">Iniciar Sesión</Link>
      <Link to="/carrito" className="link-carrito">
        <h4 className="total">
          <span className="logo-carrito">🛒</span>Total: $
          {/* {formatNumber(total)} */}
        </h4>
      </Link>
    </div>
  </div>
  )
}
