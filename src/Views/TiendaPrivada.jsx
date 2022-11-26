import React, { useContext } from 'react';
import Card from '../Components/Card';
import PrivateNavbar from '../Components/PrivateNavbar';
import TiendaContext from '../Context/TiendaProvider';

export default function TiendaPrivada() {
  const {setBusqueda } = useContext(TiendaContext);

   


  return (
    <div>
      <PrivateNavbar />
      <form className="search-bar d-flex">
        <input
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
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