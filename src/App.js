import { BrowserRouter, Routes, Route } from "react-router-dom";
//-----------views-------------------
import Favoritos from "./Views/Favoritos";
import Home from "./Views/Home";
import NotFound from "./Views/NotFound";
import Registro from "./Views/Registro";
import InicioSesion from "./Views/InicioSesion";
import Perfil from "./Views/Perfil";
import TiendaPrivada from "./Views/TiendaPrivada";
import Detalle from "./Views/Detalle";
import { TiendaProvider } from "./Context/TiendaProvider";



function App() {
  return (
    <BrowserRouter>
    <TiendaProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/tienda" element={<TiendaPrivada />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/tienda/servicio/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </TiendaProvider>
    </BrowserRouter>
  );
}

export default App;
