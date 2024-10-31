import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { RoleRoute } from './components/RoleRoute';
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
import { Profesores } from "./Interfaces/Profesores";
import { Perfil } from './Interfaces/Perfil';
import {PerfilPadre} from './Interfaces/PerfilPadre'
import {IngresarNotas} from './Interfaces/IngresarNotas'
import {Pagos} from './Interfaces/Pagos'
import {PagoExitoso} from './Interfaces/PagoExitoso'
import {Reportes} from './Interfaces/Reportes'
import {Graficas} from './Interfaces/Graficas'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/login" element={<Login />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/graficas" element={<Graficas />} />



          {/* Rutas protegidas */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pago-exitoso" element={<PagoExitoso />} />


            {/* Rutas accesibles solo para rol 5 (Estudiantes) */}
            <Route element={<RoleRoute roles={['5', '6']} />}>
              <Route path="/estudiantes" element={<Estudiantes />} />
              <Route path="/padres" element={<Padres />} />
            </Route>

            {/* Rutas accesibles solo para rol 5 (Estudiantes) */}
            <Route element={<RoleRoute roles={['1']} />}>
              <Route path="/perfil" element={<Perfil />} />
            </Route>

            {/* Rutas accesibles solo para rol 5 (Estudiantes) */}
            <Route element={<RoleRoute roles={['4']} />}>
              <Route path="/perfilPadre" element={<PerfilPadre />} />
              <Route path="/pagos" element={<Pagos />} />

            </Route>

            {/* Rutas accesibles solo para rol 3 (Administrativo) */}
            <Route element={<RoleRoute roles={['3']} />}>
              <Route path="/moras" element={<Moras />} />
            </Route>

             {/* Rutas accesibles solo para rol 2 (Profesores) */}
             <Route element={<RoleRoute roles={['2']} />}>
              <Route path="/notas" element={<IngresarNotas />} />
            </Route>

            {/* Rutas accesibles solo para rol 6 */}
            <Route element={<RoleRoute roles={['6']} />}>
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/padres" element={<Padres />} />
              <Route path="/profesores" element={<Profesores />} />
              <Route path="/grados" element={<Grados />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
