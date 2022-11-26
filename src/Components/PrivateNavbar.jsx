import React from 'react';
import { Link } from "react-router-dom";
import { formatNumber } from '../formatNumber';
import Logo from '../assets/Img/Logo.PNG';
import '../Styles/navbar.css';



export default function PrivateNavbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
      <Link to="/" className="logo">
          <img className="logo-img" src={Logo} alt="logo" />
      </Link>
      </div>
    <div className="links">
      <Link to="/perfil" className="link-menu">Mi Perfil</Link>
      <Link to="/publicar" className="link-menu">Añadir Publicación</Link>
      <Link to="/tienda" className="link-menu">Página de servicios</Link>
      <Link to="/favoritos" className="link-menu">Mis Favoritos</Link>
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
