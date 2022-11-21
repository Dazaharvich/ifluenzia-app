import React, { useContext } from 'react';
import Card from '../Components/Card';
import PrivateNavbar from '../Components/PrivateNavbar';
import TiendaContext from '../Context/TiendaProvider';

export default function TiendaPrivada() {
  const {setBusqueda, servicios, setServicios } = useContext(TiendaContext);

    const handleChanges = e =>{
      filtrar(e.target.value);
      setBusqueda(e.target.value);
    };

    

    const filtrar = (termino)=>{
      /* const servicioIndex = servicios.servicios.findIndex((p) => p.id === id); */
      let resultadoBusqueda = servicios.filter((elemento)=>{
        if((elemento.name).toString().toLowerCase().includes(termino.toLowerCase()) 
        /* || elemento.servicios[servicioIndex].toString().toLowerCase().includes(termino.toLowerCase()) */
        ){
          return elemento;
        }
      });
      setServicios(resultadoBusqueda);

    }

  return (
    <div>
      <PrivateNavbar />
      <form className="search-bar d-flex" onChange={handleChanges}>
        <input
          className=" search-input form-control m-3"
          type="text"
          placeholder="Buscar Influencer"
          
        />
      </form>
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}