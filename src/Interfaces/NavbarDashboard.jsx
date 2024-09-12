import { Link } from "react-router-dom";
import imagen from "../../public/images/logo.png";
export const NavbarDashboard = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-primary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand display-6" to="/">
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
                <a className="nav-link" href="#">
                  Grados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cursos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Padres
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Estudiantes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profesores
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
