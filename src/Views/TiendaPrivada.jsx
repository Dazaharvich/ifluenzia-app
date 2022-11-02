import React from 'react';
import Card from '../Components/Card';
import PrivateNavbar from '../Components/PrivateNavbar';

export default function TiendaPrivada() {
  return (
    <div>
        <PrivateNavbar />
        <div className='card-container'>
          <Card />
        </div>

    </div>
  )
}