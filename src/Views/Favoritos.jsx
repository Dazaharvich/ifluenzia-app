import React,{ useContext } from 'react';
import TiendaContext from '../Context/TiendaProvider';
import PrivateNavbar from '../Components/PrivateNavbar';
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../formatNumber";
import '../Styles/favoritos.css';
import swal from 'sweetalert';


export default function Favoritos() {
  const {servicios, setServicios, addToCart} = useContext(TiendaContext);
  const navigate = useNavigate();

  const unSetFavoritos = (id) =>{
    const servicioIndex = servicios.findIndex((e) => e.id === id);
    servicios[servicioIndex].favorito = !servicios[servicioIndex].favorito;
    setServicios([...servicios]);
    swal("Se fueee!", "Haz quitado este servicio a tus favoritos", "info");
  }


  return (
    <div>
      <PrivateNavbar />
      <div className="card-container">
        {servicios
          .filter((servicio) => servicio.favorito)
          .map((servicio) => (
            <div key={servicio.id} className="cards">
              <div className="card">
                <img
                  className="card-img-top"
                  src={servicio.img}
                  alt={servicio.name}
                />
                <div className="card-body">
                  <div className="card-header">
                    <h4 className="card-tittle">
                      <span className="hashtag"># </span>
                      {servicio.name}
                    </h4>
                  </div>
                  <p className="card-text">
                    <b>Servicios:</b>
                  </p>
                  <ul style={{ listStyle: "none" }}>
                    {servicio.servicios.map((servicio, i) => (
                      <li key={i}>👾 {servicio}</li>
                    ))}
                  </ul>
                </div>
                <div className='precio-favoritos'>
                <span onClick={() => unSetFavoritos(servicio.id)} className='quitar-favorito'><p>Quitar de Favoritos <i
                      class="fa-solid fa-heart-circle-xmark"
                      
                    ></i></p></span>
                  <h2 className="card-precio">
                  $ {formatNumber(servicio.price)}
                </h2></div>
                
                <div className="buttons">
                  <button
                    className="btn-verMas"
                    to={`/servicio/${servicio.id}`}
                    onClick={() => navigate(`/tienda/servicio/${servicio.id}`)}
                  >
                    Ver mas
                  </button>
                  <button
                    className="btn-añadir"
                    onClick={() => addToCart(servicio)}
                  >
                    Contratar
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
