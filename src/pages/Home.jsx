
// src/pages/Home.jsx

import React from 'react';
import Navbar from '../components/Navbar'; 
import './Home.css'; 

const Home = () => {
    return (
        <>
            <Navbar />

            {/* Sección de Inicio */}
            <div className="inicio-bg">
                <div className="container text-center text-white">
                    <h1 className="display-4">¿Quieres estudiar con nosotros?</h1>
                    <a href="/registro" className="btn btn-primary btn-lg mt-3">Regístrate</a>
                </div>
            </div>

            {/* Sección Sobre Nosotros */}
            <section id="sobre-nosotros" className="sobre-nosotros-bg">
                <div className="container">
                    <div className="row text-center text-white">
                        <div className="col-md-6 mb-4">
                            <h2>Misión</h2>
                            <p>Nuestra misión es proporcionar una educación de calidad que prepare a nuestros estudiantes para enfrentar los desafíos del futuro.</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h2>Visión</h2>
                            <p>Queremos ser líderes en educación, fomentando la innovación y el crecimiento personal en un entorno inclusivo y colaborativo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Galería */}
            <section id="galeria" className="gallery-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Galería</h2>
                    <div className="carousel-container">
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/photo1.jpeg" className="d-block w-100" alt="Foto 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/photo2.jpeg" className="d-block w-100" alt="Foto 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/photo3.jpeg" className="d-block w-100" alt="Foto 3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <img src="/images/prev-icon.png" alt="Previous" className="carousel-control-icon" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <img src="/images/next-icon.png" alt="Next" className="carousel-control-icon" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Contacto */}
            <section id="contacto" className="py-6">
                <div className="container">
                    <h2 className="text-center mb-4">Contacto</h2>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="mensaje" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </section>

            {/* Sección de Información y Mapa */}
            <section className="info-mapa-section py-5">
                <div className="container">
                    <div className="row">
                        {/* Redes Sociales */}
                        <div className="col-md-4 social-icons">
                            <h4>Síguenos en redes sociales</h4>
                            <ul className="social-icons list-unstyled d-flex flex-column">
                                <li><a href="#" className="mb-2"><img src="/images/facebook-icon.png" alt="Facebook" /></a></li>
                                <li><a href="#" className="mb-2"><img src="/images/whatsapp-icon.png" alt="whatsApp" /></a></li>
                                <li><a href="#" className="mb-2"><img src="/images/instagram-icon.png" alt="Instagram" /></a></li>
                            </ul>
                        </div>

                        {/* Donde encontrarnos */}
                        <div className="col-md-6">
                            <h4>Dónde encontrarnos</h4>
                            <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: '400px' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092736563518!2d-122.41941508468288!3d37.77492927975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d9d2d91%3A0xf7e055c1e4b28f1f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1616407918285!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;