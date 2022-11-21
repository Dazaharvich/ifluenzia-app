import React from 'react';
import PrivateNavbar from '../Components/PrivateNavbar';


export default function NuevaPublicacion() {
  return (
    <div>
      <PrivateNavbar />
      <div className='perfil-main'>
      <div className="perfil-container">
        <div className="form-avatar"></div>
        <input className='input'
        type="file"
        placeholder="Agregar Imagen de Perfil"/>
        <div className="form-title">Detalles de Publicación</div>
        <div className="inputs">
          <label className="label">Nombre: </label>
          <input
            className="input"
            type="text"
            placeholder="Juan"
          />
          <label className="label">Apellido: </label>
          <input
            className="input"
            type="text"
            placeholder="Gonzalez"
          />
          <label className="label">NickName: </label>
          <input
            className="input"
            type="text"
            placeholder="J_Gonzalez"
          />
          <label className="label">Correo: </label>
          <input
            className="input"
            type="email"
            placeholder="JGonzalez@gmail.com"
          />
          <label className="label">Teléfono: </label>
          <input
            className="input"
            type="number"
            placeholder="97556325"
          />
          <label className="label">Descripción: </label>
          <input
            className="input-desc"
            type="text"
            placeholder="Ingresa la descripción de tus servicios"
          />
          <button className="login-button" type="submit">
            Guardar
          </button>
        </div>
      </div>
      </div>
      
    </div>
  )
}
