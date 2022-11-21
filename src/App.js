import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
//-----------views-------------------
import Favoritos from "./Views/Favoritos";
import Home from "./Views/Home";
import NotFound from "./Views/NotFound";
import Registro from "./Views/Registro";
import InicioSesion from "./Views/InicioSesion";
import Perfil from "./Views/Perfil";
import TiendaPrivada from "./Views/TiendaPrivada";
import Detalle from "./Views/Detalle";
import TiendaContext from "./Context/TiendaProvider";
import NuevaPublicacion from "./Views/NuevaPublicacion";



function App() {

  const{ isAuth, PrivateRoute } = useContext(TiendaContext);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<InicioSesion />} />
        {/* <Route path="/favoritos" element={ <PrivateRoute auth={{ isAuth }}> <Favoritos /> </PrivateRoute> } /> */}
        <Route path="/favoritos" element={ <Favoritos /> } />
        {/* <Route path="/tienda" element={<PrivateRoute auth={{ isAuth }}> <TiendaPrivada /> </PrivateRoute> } /> */}
        <Route path="/tienda" element={ <TiendaPrivada /> } />
        {/* <Route path="/perfil" element={<PrivateRoute auth={{ isAuth }}> <Perfil /> </PrivateRoute>} /> */}
        <Route path="/perfil" element={ <Perfil /> } />
        {/* <Route path="/tienda/servicio/:id" element={<PrivateRoute auth={{ isAuth }}> <Detalle /> </PrivateRoute>} /> */}
        <Route path="/tienda/servicio/:id" element={ <Detalle /> } />
        {/* <Route path="/publicar" element={ <PrivateRoute auth={{ isAuth }}> <NuevaPublicacion /> </PrivateRoute> } /> */}
        <Route path="/publicar" element={ <NuevaPublicacion /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
