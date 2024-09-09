import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios'; 
import Login from './pages/Login';
import Noticias from './pages/Noticias';
import {Dashboard} from './Interfaces/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

