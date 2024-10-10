import { useState, useEffect } from "react";
export const FormularioCursos = ({
  editing,
  setEditing,
  onSubmit,
  reset,
  setValue,
  errors,
  register,
}) => {
  const [cursos, setCursos] = useState([]);
  const [roles, setRoles] = useState([]);
  const [grados, setGrados] = useState([]);

  //cambio de ventana
  const cambio = () => {
    setEditing(false);
    reset();
  };
 
  // Obtener la lista de grados desde el endpoint
  useEffect(() => {
    const obtenerGrados = async () => {
      try {
        const response = await fetch("http://localhost:4000/grados");
        const data = await response.json();
        setGrados(data);
      } catch (error) {
        console.error("Error al obtener los grados:", error);
      }
    };
    obtenerGrados();
  }, []);
  return (
    <form className="border border-2 p-4 rounded-4" onSubmit={onSubmit}>
      <h3 className="mb-4">
        {editing ? "Editar Curso" : "Registrar Curso"}
      </h3>
      <input
        type="text"
        placeholder="nombre curso"
        className="form-control mb-3"
        {...register("nombre_curso", {
          required: { value: true, message: "Nombre del curso es requerido" },
          minLength: { value: 2, message: "El mínimo de caracteres es 2" },
          maxLength: { value: 25, message: "El máximo de caracteres es 25" },
        })}
      />
      {errors.nombre_curso && (
        <span className="text-danger">{errors.nombre_curso.message}</span>
      )}
      <input
        type="text"
        placeholder="Descripcion"
        className="form-control mb-3 mt-3"
        {...register("descripcion", {
          required: { value: true, message: "Descripcin es requerido" },
          minLength: { value: 2, message: "El mínimo de caracteres es 2" },
          maxLength: { value: 25, message: "El máximo de caracteres es 25" },
        })}
      />
      {errors.descripcion && (
        <span className="text-danger">{errors.descripcion.message}</span>
      )}
      <div>
        <select
          id="id_grado"
          {...register("id_grado")}
          defaultValue=""
          className="form-select"
        >
          <option value="" disabled>
            Seleccione un grado
          </option>
          {grados.map((rol) => (
            <option key={rol.id_grado} value={rol.id_grado}>
              {rol.nombre_grado}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          className={`btn ${editing ? "btn-warning" : "btn-success"} mt-3`}
        >
          {editing ? "Actualizar" : "Registrar"}
        </button>
        {editing && (
          <button
            type="button"
            className="btn btn-danger mt-3 ms-3"
            onClick={cambio}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};
