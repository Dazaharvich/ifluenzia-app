import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

// Creación del context
const TiendaContext = createContext();


// Provider
const TiendaProvider = ({ children }) => {
  const [servicios, setServicios] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);


// Obtener los servicios de la Api
  const getServicios = async () => {
    const res = await fetch("/influencers.json");
    const servicios = await res.json();
    setServicios(servicios);
  };

// Obtener usuarios del json
  const getUsuarios = async () =>{
    const res = await fetch("/usuarios.json");
    let usuarios = await res.json();
    setUsers(usuarios);
  };


//Cargar lista
  useEffect(() => {
    getServicios();
    getUsuarios();
  }, []);




// Rutas Privadas
  const PrivateRoute =({auth: { isAuth }, children}) =>{
    return isAuth ? children : <Navigate to="/" />
  };


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


  //funcion de carrito incrementar
  const incrementar = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };


  //funcion de carrito decrementar
  const decrementar = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
    console.log(carrito);
  };

/*   Funcion Autenticacion Firebase
  const signup = (name, email, password) => {
    createUserWithEmailAndPassword(auth, name, email, password);
  }; */

  return (
    <TiendaContext.Provider
      value={{
        servicios,
        setServicios,
        carrito,
        setCarrito,
        addToCart,
        incrementar,
        decrementar,
        busqueda,
        setBusqueda,
        PrivateRoute,
        users,
        setUsers,
        isAuth,
        setIsAuth,
        loggedUser,
        setLoggedUser
      }}
    >
      {children}
    </TiendaContext.Provider>
  );
};

// Export del provider
export { TiendaProvider };

// Export del context
export default TiendaContext;
