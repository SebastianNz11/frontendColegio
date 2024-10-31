import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import imagen from "../../public/images/logo.png";

export const NavbarDashboard = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");

    setAuth({ isAuthenticated: false, role: null });
    navigate("/login");
  };

  return (
    <div key={auth.isAuthenticated ? "authenticated" : "guest"}>
      <nav className="navbar navbar-expand-lg bg-body-primary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand display-6" to="/dashboard">
            <img src={imagen} alt="Logo" />
            El Compilador
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {auth.isAuthenticated && (
                <>
                  {auth.role === "6" && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/grados">
                          Grados
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/cursos">
                          Cursos
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/padres">
                          Padres
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/estudiantes">
                          Estudiantes
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/profesores">
                          Profesores
                        </Link>
                      </li>
                    </>
                  )}
                  {auth.role === "5" && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/estudiantes">
                          Estudiantes
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/padres">
                          Padres
                        </Link>
                      </li>
                    </>
                  )}
                  {auth.role === "3" && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/pagos">
                          Pagos
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/moras">
                          Moras
                        </Link>
                      </li>
                    </>
                  )}
                  {auth.role === "2" && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/notas">
                          Notas
                        </Link>
                      </li>
                    </>
                  )}
                  {auth.role === "1" && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/perfil">
                          Perfil
                        </Link>
                      </li>
                    </>
                  )}
                  {auth.role === "4" && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/perfilPadre">
                          Notas Hijo
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/pagos">
                          Pagos
                        </Link>
                      </li>
                    </>
                  )}
                </>
              )}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
