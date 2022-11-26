import React, { useContext } from 'react';
import PrivateNavbar from '../Components/PrivateNavbar';
import TiendaContext from '../Context/TiendaProvider';
import '../Styles/perfil.css';


export default function Perfil() {
  const {loggedUser} = useContext(TiendaContext);


  return (
    <>
      <PrivateNavbar />
      <div className='perfil-main'>
      <div className="perfil-container">
        <div className="form-avatar"></div>
        <div className="form-title">Información Personal</div>
        <div className="inputs">
          <label className="label">Nombre: </label>
          <input
            className="input"
            type="text"
            placeholder={loggedUser.nombre}
          />
          <label className="label">Nombre Usuario: </label>
          <input
            className="input"
            type="text"
            placeholder={loggedUser.nombre}
          />
          <label className="label">Correo: </label>
          <input
            className="input"
            type="email"
            placeholder={loggedUser.correo}
          />
          <label className="label">Teléfono: </label>
          <input
            className="input"
            type="number"
            placeholder="97556325"
          />
          <button className="login-button" type="submit">
            Guardar
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
