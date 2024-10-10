import { useEffect, useState } from "react";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { NavbarDashboard } from "./NavbarDashboard";
import { useForm } from "react-hook-form";
import { FormularioProfesores } from "../components/FormularioProfesores";
import { TablaProfesores } from "../components/TablaProfesores";
import { SearchBarPadres } from "../components/SearchBarPadres";
import { ImagenProfesores } from "../components/ImagenProfesores";
import Swal from "sweetalert2";
import "./general.css";
import { SearchBarProfesores } from "../components/SearchProfesores";

export const Profesores = () => {
  const [datos, setDatos] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/profesores", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      let data = await response.json();
      data = data.sort((a, b) => a.nombres.localeCompare(b.nombres));
      setDatos(data);
      setFilter(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error",
        "No se pudieron cargar los datos del servidor",
        "error"
      );
    }
  };

  const PostData = async (data) => {
    const {
      nombres,
      apellidos,
      correo,
      contrasenia,
      id_curso,
      id_rol
    } = data;
    try {
      const response = await fetch("http://localhost:4000/profesores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombres,
          apellidos,
          correo,
          contrasenia,
          id_curso,
          id_rol
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      await fetchData();
      Swal.fire(
        "Registrado",
        "El profesor ha sido registrado con éxito",
        "success"
      );
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error",
        "Hubo un problema al conectar con el servidor",
        "error"
      );
    }
  };

  const updateData = async (data) => {
    const {
      nombres,
      apellidos,
      correo,
      contrasenia,
      id_curso,
      id_rol
    } = data;
    try {
      const response = await fetch(
        `http://localhost:4000/profesores/${editId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombres,
            apellidos,
            correo,
            contrasenia,
            id_curso,
            id_rol
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      await fetchData();
      setEditing(false);
      reset();
      Swal.fire(
        "Actualizado",
        "El registro ha sido actualizado con éxito",
        "success"
      );
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error",
        "Hubo un problema al conectar con el servidor",
        "error"
      );
    }
  };

  const handleDelete = async (row) => {
    const { id_profesor } = row;
    try {
      const response = await fetch(
        `http://localhost:4000/profesores/${id_profesor}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      await fetchData();
      Swal.fire("Eliminado", "El registro ha sido eliminado", "success");
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error",
        "Hubo un problema al conectar con el servidor",
        "error"
      );
    }
  };

  const onSubmit = handleSubmit((data) => {
    if (editing) {
      updateData(data);
    } else {
      PostData(data);
    }
    reset();
  });

  const handleEdit = (row) => {
    setEditing(true);
    setEditId(row.id_profesor);
    setValue("nombres", row.nombres);
    setValue("apellidos", row.apellidos);
    setValue("correo", row.correo);
    setValue("contrasenia", row.contrasenia);
    setValue("id_curso", row.id_curso);
    setValue("id_rol", row.id_rol);
  };

  const columns = [
    {
      name: "Nombres",
      selector: (row) => row.nombres,
      sortable: true,
    },
    {
      name: "Apellidos",
      selector: (row) => row.apellidos,
    },
    {
      name: "Correo",
      selector: (row) => row.correo,
    },
    {
      name: "id curso",
      selector: (row) => row.id_curso,
    },
    {
      name: "id rol",
      selector: (row) => row.id_rol,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button
            onClick={() => handleEdit(row)}
            className="btn btn-primary btn-sm me-1"
          >
            <BsFillPencilFill />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="btn btn-danger btn-sm ml-2"
          >
            <BsFillTrash3Fill />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredData = datos.filter((item) =>
      item.firstName.toLowerCase().includes(searchValue)
    );
    setFilter(filteredData);
  };

  return (
    <>
      <NavbarDashboard />
      <div className="container ps-5 d-flex mt-5 espacio">
        <div className="col-6 me-4">
          <FormularioProfesores
            setEditing={setEditing}
            editing={editing}
            onSubmit={onSubmit}
            reset={reset}
            setValue={setValue}
            errors={errors}
            register={register}
          />
        </div>
        <div className="col-6 d-flex justify-content-around ms-4">
          <ImagenProfesores />
        </div>
      </div>

      <div className="container p-5">
        <SearchBarProfesores handleSearch={handleSearch} />
        <TablaProfesores
          datos={datos}
          filter={filter}
          columns={columns}
          loading={loading}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
};
