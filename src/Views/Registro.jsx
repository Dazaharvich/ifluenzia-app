import React from 'react';
import '../Styles/registro.css';
import Navbar from '../Components/Navbar';


export default function Registro() {
  return (
    <>
    <Navbar />
    <div className='main'> 
    <div className="container">
      <div className="form-avatar"></div>
      <div className="form-title">Crea tu cuenta!</div>
      <p>Ingresa tus datos</p>
      <div className="inputs">
      <label className='label'>Nombre</label>
      <input className='input' type="text" placeholder="Nombre" />
        <label className='label'>Email</label>
        <input className='input' type="email" placeholder="juanito123@test.com" />
        <label className='label'>Contraseña</label>
        <input className='input' type="password" placeholder="Min 6 caracteres de largo" />
        <button className='login-button' type="submit">Registrame</button>
      </div>
    {/*   <a href="https://twitter.com/prathkum">MADE BY PRATHAM</a> */}
    </div>
    </div>
    </>
  );
}
