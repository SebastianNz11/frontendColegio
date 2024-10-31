import { useState, useEffect } from "react";
import { NavbarDashboard } from "../Interfaces/NavbarDashboard";
import Swal from "sweetalert2"; // Importa SweetAlert2

export const IngresarNotas = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [notas, setNotas] = useState([]);
  const [idCurso, setIdCurso] = useState(null);
  const [bimestre, setBimestre] = useState(1);
  const [notasParaAsignar, setNotasParaAsignar] = useState([]);
  const idProfesor = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCursoDelProfesor = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/profesores/${idProfesor}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener el curso del profesor");
        }
        const data = await response.json();
        setIdCurso(data.id_curso);

        fetchEstudiantes(data.id_curso);
        fetchNotas(data.id_curso);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCursoDelProfesor();
  }, [idProfesor]);

  const fetchEstudiantes = async (idCurso) => {
    try {
      const response = await fetch(
        `http://localhost:4000/curso/${idCurso}/estudiantes`
      );
      if (!response.ok) {
        throw new Error("Error al obtener estudiantes");
      }
      const data = await response.json();
      setEstudiantes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNotas = async (idCurso) => {
    try {
      const response = await fetch(`http://localhost:4000/cursos/${idCurso}/notas`);
      if (!response.ok) {
        throw new Error("Error al obtener notas");
      }
      const data = await response.json();
      setNotas(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNotaChange = (idEstudiante, value) => {
    setNotasParaAsignar((prevNotas) => {
      const index = prevNotas.findIndex(
        (nota) => nota.id_estudiante === idEstudiante
      );
      if (index !== -1) {
        const updatedNotas = [...prevNotas];
        updatedNotas[index].nota = value;
        return updatedNotas;
      }
      return [...prevNotas, { id_estudiante: idEstudiante, nota: value }];
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const notasAEnviar = notasParaAsignar.map(({ id_estudiante, nota }) => ({
        id_estudiante,
        bimestre,
        nota: parseFloat(nota),
      }));

      const response = await fetch(
        `http://localhost:4000/profesor/${idProfesor}/curso/${idCurso}/asignar-nota`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bimestre,
            notas: notasAEnviar,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al asignar notas");
      }

      const result = await response.json();
      console.log(result);

      // Utiliza SweetAlert2 para mostrar el mensaje de éxito
      await Swal.fire({
        icon: 'success',
        title: 'Notas asignadas exitosamente',
        confirmButtonText: 'Aceptar'
      });
      
      // Limpiar los campos después de enviar las notas
      setNotasParaAsignar(estudiantes.map(estudiante => ({ id_estudiante: estudiante.id_estudiante, nota: "" })));

      fetchNotas(idCurso);
    } catch (error) {
      console.error(error);
      
      // Utiliza SweetAlert2 para mostrar el mensaje de error
      await Swal.fire({
        icon: 'error',
        title: 'Error al asignar notas',
        text: error.message,
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <>
      <NavbarDashboard />
      <div className="mt-5 pt-5">
        <div className="container mt-5">
          <h2 className="mb-5 mt-5">Asignar Notas</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Bimestre:</label>
              <select
                className="form-select"
                value={bimestre}
                onChange={(e) => setBimestre(Number(e.target.value))}
              >
                <option value="1">Bimestre 1</option>
                <option value="2">Bimestre 2</option>
                <option value="3">Bimestre 3</option>
                <option value="4">Bimestre 4</option>
              </select>
            </div>
            {estudiantes.map((estudiante) => (
              <div className="mb-3" key={estudiante.id_estudiante}>
                <label className="form-label">
                  {estudiante.nombres} {estudiante.apellidos}
                </label>
                <input
                  type="number"
                  placeholder="Nota"
                  className="form-control"
                  required
                  onChange={(e) =>
                    handleNotaChange(estudiante.id_estudiante, e.target.value)
                  }
                  value={
                    notasParaAsignar.find(nota => nota.id_estudiante === estudiante.id_estudiante)?.nota || ""
                  }
                />
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Asignar Notas
            </button>
          </form>

          <h2 className="mb-5 mt-5">Notas por Estudiante</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Bimestre 1</th>
                <th>Bimestre 2</th>
                <th>Bimestre 3</th>
                <th>Bimestre 4</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante) => {
                const estudianteNotas = notas.filter(nota => nota.id_estudiante === estudiante.id_estudiante);
                
                const bimestreNotas = [1, 2, 3, 4].map(bim => {
                  const notaBim = estudianteNotas.find(nota => nota.bimestre === bim);
                  return notaBim ? notaBim.nota : "-";
                });

                return (
                  <tr key={estudiante.id_estudiante}>
                    <td>{`${estudiante.nombres} ${estudiante.apellidos}`}</td>
                    <td>{bimestreNotas[0]}</td>
                    <td>{bimestreNotas[1]}</td>
                    <td>{bimestreNotas[2]}</td>
                    <td>{bimestreNotas[3]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
