import { useEffect, useState } from "react";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { NavbarDashboard } from "./NavbarDashboard";
import { useForm } from "react-hook-form";
import { FormularioGrados } from "../components/FormularioGrados";
import { TablaGrados } from "../components/TablaGrados";
import { SearchBarGrados } from "../components/searchBarGrados";
import { ImagenEstudiantes } from "../components/ImagenEstudiantes";
import Swal from "sweetalert2";
import "./general.css";

export const Grados = () => {
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
      const response = await fetch("http://localhost:4000/grados", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      let data = await response.json();
      data = data.sort((a, b) => a.nombre_grado.localeCompare(b.nombre_grado));
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
      nombre_grado
    } = data;
    try {
      const response = await fetch("http://localhost:4000/grados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre_grado
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      await fetchData();
      Swal.fire(
        "Registrado",
        "El grado ha sido registrado con éxito",
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
      nombre_grado
    } = data;
    try {
      const response = await fetch(
        `http://localhost:4000/grados/${editId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre_grado
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
        "El grado ha sido actualizado con éxito",
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
    const { id_grado } = row;
    try {
      const response = await fetch(
        `http://localhost:4000/grados/${id_grado}`,
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
    setEditId(row.id_grado);
    setValue("grados", row.nombre_grado);
  };

  const columns = [
    {
      name: "Grado",
      selector: (row) => row.nombre_grado,
      sortable: true,
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
      item.nombre_grado.toLowerCase().includes(searchValue)
    );
    setFilter(filteredData);
  };

  return (
    <>
      <NavbarDashboard />
      <div className="container ps-5 d-flex mt-5 espacio">
        <div className="col-6 me-4">
          <FormularioGrados
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
          <ImagenEstudiantes />
        </div>
      </div>

      <div className="container p-5">
        <SearchBarGrados handleSearch={handleSearch} />
        <TablaGrados
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
