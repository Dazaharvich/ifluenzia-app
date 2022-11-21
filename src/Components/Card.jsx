import React, { useContext } from "react";
import "../Styles/card.css";
import TiendaContext from '../Context/TiendaProvider';
import { formatNumber } from "../formatNumber";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

export default function Card() {
  const { servicios, setServicios, addToCart } = useContext(TiendaContext);
  const navigate = useNavigate();

  //Funcion para añadir y quitar de favoritos
  const setFavoritos = (id) =>{
    const servicioIndex = servicios.findIndex((e) => e.id ===id);
    servicios[servicioIndex].favorito = !servicios[servicioIndex].favorito;
    setServicios([...servicios]);
    servicios[servicioIndex].favorito ? swal("Listo!", "Haz añadido este servicio a tus favoritos!", "success") : swal("Se fueee!", "Haz quitado este servicio a tus favoritos", "info");
  }

  //Render de las Cards a mostrar en view TiendaPrivada
  return (
    <div className="card-container">
    {servicios.map((servicio) =>
    <div key={servicio.id} className="cards">
    <div className="card">
        <img className="card-img-top" src={servicio.img} alt={servicio.name} />
        <div className="card-body">
          <div className="card-header"><h4 className="card-tittle">
            <span className="hashtag"># </span>{servicio.name}
          </h4>
          <svg
            onClick={() => setFavoritos(servicio.id)}
            width="38px"
            viewBox="0 0 24 24"
            className="hover"
          >
            <path
              fill={servicio.favorito ? "red" : "darkgray"}
              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
            />
          </svg>
          </div>
          <p className="card-text">
            <b>Servicios:</b>
          </p>
          <ul style={{listStyle:'none'}}>
            {servicio.servicios.map((servicio, i) =>(
              <li key={i}>
                👾 {servicio}
              </li>
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
            onClick={() =>  navigate(`/tienda/servicio/${servicio.id}`)}
            >
              Ver mas</button>
            <button
            className="btn-añadir"
            onClick={()=> addToCart(servicio)}
            >
              Contratar</button>
        </div>
      </div>
      </div>
    
    )}
      
    </div>
  );
}