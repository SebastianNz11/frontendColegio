import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const PagoExitoso = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    Swal.fire({
      title: "¡Pago Exitoso!",
      text: "Su pago fue realizado con éxito.",
      icon: "success",
      confirmButtonText: "Ir al Dashboard",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard");
      }
    });
  }, [navigate]);

  return (
    <div className="container mt-5 text-center">
      <h2>Pago Realizado con Éxito</h2>
      <p>Gracias por su pago. Puede cerrar esta página o regresar al Dashboard.</p>
    </div>
  );
};


