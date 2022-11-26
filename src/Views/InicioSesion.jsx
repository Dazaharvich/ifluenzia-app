import React, { useContext }from 'react';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import TiendaContext from '../Context/TiendaProvider';
import '../Styles/registro.css';
import swal from 'sweetalert';


export default function InicioSesion() {

  const {users, setUsers, setIsAuth, setLoggedUser} = useContext(TiendaContext);
  const navigate = useNavigate();

//Capturar datos de inicio sesion
const logIn = () =>{
  //e.preventDefault();
  let correo = document.getElementById("email").value;
  let password = document.getElementById("password").value; 

  if (!correo && !password){
    swal("Complete ambos parametros por favor", "warning");
  }else{
    let newLogIn = users.find((e) => e.correo === correo);
    let newLogInIndex = users.findIndex((e) => e.correo === correo);
    if (newLogIn !== undefined){
      if (newLogIn.contraseña == password){
        setIsAuth(true);
        users[newLogInIndex].login = true;
        setLoggedUser(newLogIn);
        console.log(newLogIn);
        setUsers(users);
        navigate('/tienda');
      } else {
        swal("Correo o contraseña invalidos", "warning");
      }
    } else {
      swal("Correo o contraseña invalidos", "warning");
    }
  }
};

  return (
    <>
      <Navbar />
      <form className="main" onSubmit={logIn}>
        <div className="container">
          <div className="form-avatar"></div>
          <div className="form-title">Bienvenido de vuelta!</div>
          <p>Ingresa tus datos</p>
          <div className="inputs">
            <label htmlFor="email" className="label">
              Correo
            </label>
            <input
              className="input"
              type="email"
              id="email"
              placeholder="juanito123@test.com"
            />
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              className="input"
              type="password"
              id="password"
              placeholder="Min 6 caracteres de largo"
            />
            <button className="login-button" type="submit">
              Iniciar Sesión
            </button>
          </div>
          <Link to="/registro" className="link-menu">
            No tienes cuenta? Registrate aquí
          </Link>
        </div>
      </form>
    </>
  );
}
