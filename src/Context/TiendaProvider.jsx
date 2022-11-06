import { createContext, useState, useEffect } from "react";

// Creación del context
const TiendaContext = createContext();

// Provider con la fuente de datos para proveer
const TiendaProvider = ({ children }) => {
  const [servicios, setServicios] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // Obtener los servicios de la Api
  const getServicios = async () => {
    const res = await fetch("/influencers.json");
    const servicios = await res.json();
    setServicios(servicios);
  };
  //Cargar lista
  useEffect(() => {
    getServicios();
  }, []);

  // Funciones para el carro
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    // Si hay respuesta findIndex retorna 0, si no hay nada retorna -1
    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  //funciones de carrito
  const incrementar = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrementar = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };


  

  console.log(carrito);
  return (
    <TiendaContext.Provider
      value={{ servicios, carrito, setCarrito, addToCart, incrementar, decrementar }}
    >
      {children}
    </TiendaContext.Provider>
  );
};

// Export del provider
export { TiendaProvider };

// Export del context
export default TiendaContext;
