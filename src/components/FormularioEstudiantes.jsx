import { useState, useEffect } from "react";
export const FormularioEstudiantes = ({
  editing,
  setEditing,
  onSubmit,
  reset,
  setValue,
  errors,
  register,
}) => {
  const [padres, setPadres] = useState([]);
  const [roles, setRoles] = useState([]);
  const [grados, setGrados] = useState([]);

  //cambio de ventana
  const cambio = () => {
    setEditing(false);
    reset();
  };

  // Obtener la lista de padres desde el endpoint
  useEffect(() => {
    const obtenerPadres = async () => {
      try {
        const response = await fetch("http://localhost:4000/padres");
        const data = await response.json();
        setPadres(data);
      } catch (error) {
        console.error("Error al obtener los padres:", error);
      }
    };
    obtenerPadres();
  }, []);
  // Obtener la lista de roles desde el endpoint
  useEffect(() => {
    const obtenerRoles = async () => {
      try {
        const response = await fetch("http://localhost:4000/roles");
        const data = await response.json();
        setRoles(data);
      } catch (error) {
        console.error("Error al obtener los roles:", error);
      }
    };
    obtenerRoles();
  }, []);
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
        {editing ? "Editar Estudiante" : "Registrar Estudiante"}
      </h3>
      <input
        type="text"
        placeholder="Nombre"
        className="form-control mb-3"
        {...register("nombres", {
          required: { value: true, message: "Nombre es requerido" },
          minLength: { value: 2, message: "El mínimo de caracteres es 2" },
          maxLength: { value: 25, message: "El máximo de caracteres es 25" },
        })}
      />
      {errors.nombres && (
        <span className="text-danger">{errors.nombres.message}</span>
      )}
      <input
        type="text"
        placeholder="Apellidos"
        className="form-control mb-3 mt-3"
        {...register("apellidos", {
          required: { value: true, message: "Apellido es requerido" },
          minLength: { value: 2, message: "El mínimo de caracteres es 2" },
          maxLength: { value: 25, message: "El máximo de caracteres es 25" },
        })}
      />
      {errors.apellidos && (
        <span className="text-danger">{errors.apellidos.message}</span>
      )}
      <input
        type="email"
        placeholder="Correo"
        className="form-control mb-3 mt-3"
        {...register("correo", {
          required: { value: true, message: "Correo es requerido" },
        })}
      />
      {errors.correo && (
        <span className="text-danger">{errors.correo.message}</span>
      )}
      <div>
        <select
          id="padre"
          {...register("id_padre")}
          defaultValue=""
          className="form-select mb-3"
        >
          <option value="" disabled>
            Seleccione un padre
          </option>
          {padres.map((padre) => (
            <option key={padre.id_padre} value={padre.id_padre}>
              {padre.nombres} {padre.apellidos}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          id="rol"
          {...register("id_rol")}
          defaultValue=""
          className="form-select"
        >
          <option value="" disabled>
            Seleccione un rol
          </option>
          {roles.map((rol) => (
            <option key={rol.id_rol} value={rol.id_rol}>
              {rol.nombre_rol}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          id="grado"
          {...register("id_grado")}
          defaultValue=""
          className="form-select mt-3"
        >
          <option value="" disabled>
            Seleccione un grado
          </option>
          {grados.map((grado) => (
            <option key={grado.id_grado} value={grado.id_grado}>
              {grado.nombre_grado}
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
