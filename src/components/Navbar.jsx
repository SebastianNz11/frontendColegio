import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaImages, FaEnvelope, FaNewspaper, FaConciergeBell, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/images/logo.png" alt="Logo" className="d-inline-block align-top me-2" />
          <span>Colegio El Compilador</span>
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <FaHome className="me-1" /> Inicio
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre-nosotros">
                <FaInfoCircle className="me-1" /> Sobre Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#galeria">
                <FaImages className="me-1" /> Galería
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                <FaEnvelope className="me-1" /> Contacto
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/noticias">
                <FaNewspaper className="me-1" /> Noticias
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">
                <FaConciergeBell className="me-1" /> Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <FaUser className="me-1" /> Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

