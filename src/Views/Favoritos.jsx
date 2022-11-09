import React,{ useContext } from 'react';
import TiendaContext from '../Context/TiendaProvider';
import PrivateNavbar from '../Components/PrivateNavbar';
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../formatNumber";


export default function Favoritos() {
  const {servicios, setServicios, addToCart} = useContext(TiendaContext);
  const navigate = useNavigate();

  const unSetFavoritos = (id) =>{
    const servicioIndex = servicios.findIndex((e) => e.id === id);
    servicios[servicioIndex].favorito = !servicios[servicioIndex].favorito;
    setServicios([...servicios]);
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
                    <i
                      class="fa-solid fa-square-xmark"
                      onClick={() => unSetFavoritos(servicio.id)}
                    ></i>
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
                <h2 className="card-precio">
                  $ {formatNumber(servicio.price)}
                </h2>
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
