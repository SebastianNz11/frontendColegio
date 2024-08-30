import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios'; 
import Login from './pages/Login';
import Noticias from './pages/Noticias';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
    return (
        <Router>
            {/* Navbar disponible en todas las páginas */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/noticias" element={<Noticias />} />
            </Routes>
            {/* Footer estará disponible en todas las páginas */}
            <Footer />
        </Router>
    );
};

export default App;

