import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Login from "./pages/Login";
import { Dashboard } from "./Interfaces/Dashboard";
import Noticias from "./pages/Noticias";
import { Cursos } from "./Interfaces/Cursos";
import { Estudiantes } from "./Interfaces/Estudiantes";
import { Grados } from "./Interfaces/Grados";
import { Moras } from "./Interfaces/Moras";
import { Notas } from "./Interfaces/Notas";
import { Padres } from "./Interfaces/Padres";
import { Pagos } from "./Interfaces/Pagos";
import { Profesores } from "./Interfaces/Profesores";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/padres" element={<Padres />} />
        <Route path="/estudiantes" element={<Estudiantes />} />
        <Route path="/profesores" element={<Profesores />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/moras" element={<Moras />} />
        <Route path="/moras" element={<Moras />} />
        <Route path="/grados" element={<Grados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
