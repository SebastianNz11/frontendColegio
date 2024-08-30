import React from 'react';
import './Registro.css'; // Importa el archivo CSS correspondiente

const Registro = () => {
    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-center mb-4">Regístrate</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rol" className="form-label">Selecciona tu rol</label>
                            <select className="form-select" id="rol" required>
                                <option value="" disabled selected>Elige un rol</option>
                                <option value="profesor">Profesor</option>
                                <option value="director">Director</option>
                                <option value="estudiante">Estudiante</option>
                                <option value="padre">Padre</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Regístrate</button>
                    </form>
                    <div className="text-center mt-3">
                        <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
                        <p><a href="#">Recuperar contraseña</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registro;
