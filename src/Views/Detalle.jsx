import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
//import { formatNumber } from "../formatNumber";
import Navbar from '../Components/Navbar';
import TiendaContext from '../Context/TiendaProvider';
import '../Styles/detalle.css';




export default function Detalle() {
  const [servicioDetalle, setServicioDetalle] = useState({});
  const { servicios, addToCart } = useContext(TiendaContext);
  const { id } = useParams();

  const getDatos = () =>{
    const datosServicio = servicios.find((servicio) => servicio.id === id);
    setServicioDetalle(datosServicio);
  };

  useEffect(() =>{
    getDatos();
  },[servicios]);

  //render del detalle de cada servicio desde btn "Ver Mas"

  return (
    <>
      <Navbar />
      <div className="card-container">
        <div className="cards">
          <div className="card-detalle">
            <img
              className="card-img-top"
              src={servicioDetalle.img}
              alt={servicioDetalle.name}
            />
            <div className="card-body">
              <h4 className="card-tittle">Pizza {servicioDetalle.name}</h4>
              <p className='card-detalle-descripcion'>{servicioDetalle.desc}</p>
              <p className="card-text">
                <b>Ingredientes:</b>
              </p>
              <ul style={{ listStyle: "none" }}>
                {servicioDetalle.servicios?.map((servicio, i) => (
                  <li key={i}>👾 {servicio}</li>
                ))}
              </ul>
            </div>
            <h2 className="card-precio">
              Precio: $ {/* {formatNumber( */}{servicioDetalle.price}  {/* No logré formatear el número de este precio. Me arroja error */}
            </h2>
            <div className="buttons">
              <button
                className="btn-añadir"
                onClick={() => addToCart(servicioDetalle)}
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}