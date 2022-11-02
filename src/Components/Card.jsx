import React, { useContext } from "react";
import "../Styles/card.css";
import TiendaContext from '../Context/TiendaProvider';
import { formatNumber } from "../formatNumber";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const { servicios, addToCart } = useContext(TiendaContext);
  const navigate = useNavigate();

  //Render de las Cards a mostrar en view Home
  return (
    <div className="card-container">
    {servicios.map((servicio) =>
    <div key={servicio.id} className="cards">
    <div className="card">
        <img className="card-img-top" src={servicio.img} alt={servicio.name} />
        <div className="card-body">
          <h4 className="card-tittle">
            Nombre: {servicio.name}
          </h4>
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
          Precio: $ {formatNumber(servicio.price)}
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