import React from 'react';
import Navbar from '../components/Navbar'; 
import './Home.css'; 

const Home = () => {
    return (
        <>
            <Navbar />

            {/* Sección de Inicio */}
            <header className="inicio-bg">
                    <div className="container text-center text-white">
                        <h1 className="display-4 animated fadeIn">¿Quieres estudiar con nosotros?</h1>
                        <a href="#registro" className="btn btn-primary btn-lg mt-3 animated fadeIn">Más Información</a>
                    </div>
            </header>

            {/* Sección Sobre Nosotros */}
            <section id="sobre-nosotros" className="sobre-nosotros-section py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4 mb-4">
                            <div className="info-card animated fadeIn">
                                <h4>Quiénes Somos</h4>
                                <p>
                                    Somos una institución educativa comprometida con la formación integral de nuestros estudiantes, ofreciendo una educación de calidad y valores sólidos.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="info-card animated fadeIn">
                                <h4>Misión</h4>
                                <p>
                                    Nuestra misión es proporcionar una educación de excelencia que fomente el desarrollo académico, personal y social de nuestros estudiantes, preparándolos para ser ciudadanos responsables y comprometidos.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="info-card animated fadeIn">
                                <h4>Visión</h4>
                                <p>
                                    Nos esforzamos por ser líderes en la educación, creando un ambiente de aprendizaje innovador y inclusivo, que inspire a nuestros estudiantes a alcanzar su máximo potencial y contribuir positivamente a la sociedad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Galería */}
            <section id="galeria" className="gallery-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Galería</h2>
                    <div id="carouselExampleIndicators" className="carousel slide">
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
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Sección de Contacto */}
            <section id="contacto" className="contacto-section py-6">
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
                        {/* Donde encontrarnos */}
                        <div className="col-md-12">
                            <h4 className="text-center">Dónde encontrarnos</h4>
                            <div id="map-container" className="map-container">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092736563518!2d-90.735269!3d14.5586801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890e0b5feebffd%3A0xa56da2313a76b9fd!2s6a%20Avenida%20Norte%2C%20Antigua%20Guatemala!5e0!3m2!1ses!2sgt!4v1616407918285" 
                                    width="100%" 
                                    height="400" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
