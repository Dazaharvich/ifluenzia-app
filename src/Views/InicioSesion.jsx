import React from 'react';
import '../Styles/inicioSesion.css';
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
        <label className='label'>Correo</label>
        <input className='input' type="email" placeholder="juanito123@test.com" />
        <label className='label'>Contraseña</label>
        <input className='input' type="password" placeholder="Min 6 caracteres de largo" />
        <button className='login-button' type="submit">Registrame</button>
      </div>
    {/*   <a href="https://twitter.com/prathkum">MADE BY PRATHAM</a> */}
    </div>
    </div>
  </>
  )
}
