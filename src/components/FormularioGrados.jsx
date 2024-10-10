import { useState, useEffect } from "react";
export const FormularioGrados = ({
  editing,
  setEditing,
  onSubmit,
  reset,
  setValue,
  errors,
  register,
}) => {
  const [grados, setGrados] = useState([]);
  const [roles, setRoles] = useState([]);

  //cambio de ventana
  const cambio = () => {
    setEditing(false);
    reset();
  };
  return (
    <form className="border border-2 p-4 rounded-4" onSubmit={onSubmit}>
      <h3 className="mb-4">
        {editing ? "Editar Grado" : "Registrar Grado"}
      </h3>
      <input
        type="text"
        placeholder="Nombre"
        className="form-control mb-3"
        {...register("nombre_grado", {
          required: { value: true, message: "Grado es requerido" },
          minLength: { value: 2, message: "El mínimo de caracteres es 2" },
          maxLength: { value: 25, message: "El máximo de caracteres es 25" },
        })}
      />
      {errors.nombre_grado && (
        <span className="text-danger">{errors.nombre_grado.message}</span>
      )}
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
