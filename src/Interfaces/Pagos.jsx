import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {NavbarDashboard} from './NavbarDashboard'
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

export const Pagos = () => {
  const [monto, setMonto] = useState(200); // Monto inicial sin mora
  const [tieneMora, setTieneMora] = useState(null); // Estado de mora inicializado en null
  const navigate = useNavigate();

  // Función para verificar mora
  const verificarMora = async (idPadre) => {
    try {
      const respuesta = await fetch(`http://localhost:4000/padre/${idPadre}/mora`);
      if (!respuesta.ok) {
        throw new Error("Error al obtener información de mora.");
      }
      const data = await respuesta.json();
      
      setTieneMora(data.tieneMora); // Actualiza `tieneMora` con la respuesta
      
      // Si tiene mora, ajusta el monto
      setMonto(data.tieneMora ? 220 : 200);
    } catch (error) {
      console.error("Error al verificar mora:", error.message);
      Swal.fire({
        title: "Error",
        text: "No se pudo verificar la mora. Intente nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#d33",
      });
    }
  };

  useEffect(() => {
    const idPadre = JSON.parse(localStorage.getItem("userId"));
    if (idPadre) {
      verificarMora(idPadre);
    }
  }, []);

  const manejarPago = async () => {
    const idPadre = JSON.parse(localStorage.getItem("userId"));
    if (!idPadre) {
      console.error("No se encontró el id del padre en localStorage");
      return;
    }

    if (tieneMora === null) {
      Swal.fire({
        title: "Error",
        text: "No se pudo determinar el estado de mora. Intente nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (tieneMora) {
      const result = await Swal.fire({
        title: "¡Atención!",
        text: "Tienes una mora pendiente. El monto a pagar es de $220. ¿Deseas continuar con el pago?",
        icon: "warning",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#d33",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        realizarPago(idPadre);
      }
    } else {
      realizarPago(idPadre);
    }
  };

  const realizarPago = async (idPadre) => {
    try {
      const respuesta = await fetch("http://localhost:4000/pago", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_padre: idPadre,
          monto,
        }),
      });
  
      if (!respuesta.ok) {
        const errorData = await respuesta.json();
        // Si el mensaje es sobre el pago ya realizado
        if (errorData.message === "Ya has realizado un pago este mes.") {
          Swal.fire({
            title: "Información",
            text: errorData.message,
            icon: "info",
            confirmButtonText: "Aceptar",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: errorData.message,
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
        return;
      }
  
      const data = await respuesta.json();
      if (data.url) {
        window.location.href = data.url; // Redirigir a la URL de éxito
      } else {
        mostrarPagoExitoso(); // Función para mostrar un mensaje de pago exitoso
      }
    } catch (error) {
      console.error("Error al iniciar el pago:", error.message);
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al procesar su solicitud. Por favor, inténtelo de nuevo.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };
  
  // Función para mostrar un mensaje de pago exitoso
  const mostrarPagoExitoso = () => {
    Swal.fire({
      title: "Pago Exitoso",
      text: "Su pago se ha realizado con éxito.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };



  return (
    <>
    <NavbarDashboard/>
    <div className="container mt-5 pt-5">
      <div className="card shadow p-4">
        <h2 className="card-title text-center mb-4">Realizar Pago de Colegiatura</h2>
        <p className="text-center h4">Monto: ${monto}</p>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary btn-lg" onClick={manejarPago}>
            Pagar Ahora
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
