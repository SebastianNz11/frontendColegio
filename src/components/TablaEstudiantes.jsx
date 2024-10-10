import DataTable from "react-data-table-component";

export const TablaEstudiantes = ({ datos, filter, columns, loading, handleDelete, handleEdit }) => {
  return (
    <DataTable
      className="table table-sm table-secondary"
      key={JSON.stringify(datos)}
      columns={columns}
      data={filter}
      pagination
      paginationPerPage={10}
      fixedHeader
      progressPending={loading}
    />
  );
};
