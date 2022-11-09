import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/registro.css';
import Navbar from '../Components/Navbar';



export default function InicioSesion() {
  return (
    <>
    <Navbar />
    <div className='main'> 
    <div className="container">
      <div className="form-avatar"></div>
      <div className="form-title">Bienvenido de vuelta!</div>
      <p>Ingresa tus datos</p>
      <div className="inputs">
        <label for='email' className='label'>Correo</label>
        <input className='input' type="email" name='email' placeholder="juanito123@test.com" />
        <label for='password' className='label'>Contraseña</label>
        <input className='input' type="password" name='password' placeholder="Min 6 caracteres de largo" />
        <button className='login-button' type="submit">Registrame</button>
      </div>
      <Link to="/registro" className="link-menu">No tienes cuenta? Registrate aquí</Link>
    </div>
    </div>
  </>
  )
}
