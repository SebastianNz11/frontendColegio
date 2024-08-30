import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios'; 
import Login from './pages/Login';
import Registro from './pages/Registro';
import Noticias from './pages/Noticias';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/noticias" element={<Noticias />} />
            </Routes>
        </Router>
    );
};

export default App;



