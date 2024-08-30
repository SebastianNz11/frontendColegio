import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>Contáctanos</h5>
                        <ul className="list-unstyled">
                            <li><a href="mailto:Colegiocompilador@gmail.com" className="text-white">Colegiocompilador@gmail.com</a></li>
                            <li>
                                Tel: (+502) 5944-2058 
                                <a href="https://wa.me/50259442058" target="_blank" rel="noopener noreferrer" className="contact-icon">
                                    <img src="/images/whatsapp-icon.png" alt="WhatsApp" />
                                </a>
                            </li>
                            <li>Dirección: 6ta Avenida Norte No. 35, Antigua Guatemala</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Inicio</a></li>
                            <li><a href="/servicios" className="text-white">Servicios</a></li>
                            <li><a href="/contacto" className="text-white">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Síguenos</h5>
                        <ul className="list-unstyled social-icons">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/images/facebook-icon.png" alt="Facebook" /></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/images/instagram-icon.png" alt="Instagram" /></a></li>
                            <li><a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer"><img src="/images/paypal-icon.png" alt="PayPal" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="m-0">&copy; 2024 El Compilador. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


