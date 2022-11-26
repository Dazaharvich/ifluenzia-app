import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import TiendaContext from '../Context/TiendaProvider';
import swal from 'sweetalert';
import '../Styles/registro.css';


export default function Registro() {

  const { users, setUsers } = useContext(TiendaContext);
  const navigate = useNavigate();

//Evento de registro
  const signUp = () =>{
    let id = 3;
    let correo = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;
    let repPassword = document.getElementById("rep-reg-password").value;
    let nombre = document.getElementById("reg-name").value;

//Validaciones input
    if(correo !== "" && password !== "" && repPassword !=="" && nombre !== ""){
      if (password === repPassword ){
        let userFound = users.filter((e) => e.correo === correo);
        if (userFound.length === 0){
          setUsers([...users, { userID: id++, nombre: nombre, correo: correo, contraseña: password, login: false, favorito: [] }]);
          swal("Listo!", "Haz registrado tu usuario", "success");
          navigate('/login');
        }else{
          swal("El correo ya existe", "Intenta iniciar sesión", "warning");
        }
      }else{
        swal("Las contraseñas no concuerdan","", "warning");
      }
    }else{
      swal("Debe ingresar todos sus datos","", "warning");
    }

  };



  return (
    <>
      <Navbar />
      <form className="main">
        <div className="container">
          <div className="form-avatar"></div>
          <div className="form-title">Crea tu cuenta!</div>
          <p>Ingresa tus datos</p>
          <div className="inputs">
            <label htmlFor="reg-name" className="label">
              Nombre
            </label>
            <input
              className="input"
              type="text"
              name="reg-name"
              id="reg-name"
              placeholder="Nombre"
              required
            />

            <label htmlFor="reg-email" className="label">
              Email
            </label>
            <input
              className="input"
              type="email"
              name="reg-email"
              id="reg-email"
              placeholder="juanito123@test.com"
              required
            />

            <label htmlFor="reg-password" className="label">
              Contraseña
            </label>
            <input
              className="input"
              type="password"
              name="reg-password"
              id="reg-password"
              placeholder="Min 6 caracteres de largo"
              required
            />

            <label htmlFor="rep-reg-password" className="label">
              Repita Contraseña
            </label>
            <input
              className="input"
              type="password"
              name="rep-reg-password"
              id="rep-reg-password"
              placeholder="Repita su contraseña"
              required
            />

            <button className="login-button" type="submit" onClick={signUp}>
              Registrame
            </button>
          </div>
          <Link to="/login" className="link-menu">
            Ya tienes una cuenta? Inicia sesión aquí
          </Link>
        </div>
      </form>
    </>
  );
}
