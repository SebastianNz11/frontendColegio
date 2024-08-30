import React from 'react';
import './Servicios.css';

const Servicios = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Servicios</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Básicos</h5>
                            <p className="card-text">Primaria</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Básicos</h5>
                            <p className="card-text">Básicos</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Diversificado</h5>
                            <p className="card-text">Diversificado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicios;
