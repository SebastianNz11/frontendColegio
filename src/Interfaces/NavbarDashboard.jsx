import { Link } from "react-router-dom";
import imagen from "../../public/images/logo.png";
export const NavbarDashboard = () => {
  return (
    <div>
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
            <ul className="navbar-nav">
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
              <li className="nav-item">
                <Link className="nav-link" to="/notas">
                  Notas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pagos">
                  Pagos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cursos">
                  Cursos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/moras">
                  Moras
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
