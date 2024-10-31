import { useState, useContext } from "react"; // Agrega useContext
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../components/AuthContext"; // Importa el contexto

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook de navegación
  const { setAuth } = useContext(AuthContext); // Obtiene la función setAuth del contexto

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el refresco de la página

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: email, // Asegúrate que este campo coincida con el nombre en el backend
          contrasenia: password, // Igual que con este
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Si hay un error en la respuesta, mostrarlo
        console.log("error");
        throw new Error(data.error || "Error al iniciar sesión");
      }

      // Guardar el token, id y rol en el localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.id);
      localStorage.setItem("userRole", data.rol); // Asegúrate de que esta clave coincida con AuthContext

      // Actualizar el estado de autenticación en el contexto
      setAuth({
        isAuthenticated: true,
        role: data.rol, // Cambia 'userRole' a 'role' aquí
      });

      // Redireccionar a '/dashboard'
      navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4 mt-5">Iniciar Sesión</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="border border-3 p-5 rounded-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Iniciar sesión
              </button>
              {error && (
                <div className="alert alert-danger mt-3">
                  {error}
                </div>
              )}
              <div className="text-center mt-3">
                <p>
                  <a href="#">Recuperar contraseña</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
