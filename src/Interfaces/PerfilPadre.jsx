import { useEffect, useState } from "react";
import { NavbarDashboard } from "./NavbarDashboard";

export const PerfilPadre = () => {
  const [notas, setNotas] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchNotas = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/padre/${userId}/notas`
        );

        if (!response.ok) {
          throw new Error("Error al obtener las notas");
        }

        const data = await response.json();
        setNotas(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNotas();
  }, [userId]);

  return (
    <>
      <NavbarDashboard />
      <div className="container mt-4 pt-5">
        <h1 className="mt-5 mb-5">Notas del Alumno:</h1>
        {notas.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Curso</th>
                <th scope="col">Bimestre</th>
                <th scope="col">Nota</th>
              </tr>
            </thead>
            <tbody>
              {notas.map((nota) => (
                <tr key={nota.id_nota}>
                  <td>{nota.curso.nombre_curso}</td>
                  <td>{nota.bimestre}</td>
                  <td>{nota.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No se encontraron notas.</p>
        )}
      </div>
    </>
  );
};
