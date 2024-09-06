import React from 'react';
import './Login.css'; 

const Login = () => {
    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form action="/login" method="post">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" name="password" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                    </form>
                    <div className="text-center mt-3">
                        <p><a href="#">Recuperar contraseña</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
