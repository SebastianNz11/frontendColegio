export const SearchBarProfesores = ({ handleSearch }) => {
    return (
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Buscar por nombre..."
        onChange={handleSearch}
      />
    );
  };
  