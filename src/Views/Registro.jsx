import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Styles/registro.css';
import Navbar from '../Components/Navbar';


export default function Registro() {

  const [user, setUser] = useState();

  return (
    <>
    <Navbar />
    <div className='main'> 
    <div className="container">
      <div className="form-avatar"></div>
      <div className="form-title">Crea tu cuenta!</div>
      <p>Ingresa tus datos</p>
      <div className="inputs">
      <label for='name' className='label'>Nombre</label>
      <input className='input' type="text" name='name' placeholder="Nombre" />
        <label for='email' className='label'>Email</label>
        <input className='input' type="email" name='email' placeholder="juanito123@test.com" />
        <label for='password' className='label'>Contraseña</label>
        <input className='input' type="password" name='password' placeholder="Min 6 caracteres de largo" />
        <button className='login-button' type="submit">Registrame</button>
      </div>
      <Link to="/login" className="link-menu">Ya tienes una cuenta? Inicia sesión aquí</Link>
    </div>
    </div>
    </>
  );
}
