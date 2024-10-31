import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: !!localStorage.getItem("token"),
    role: localStorage.getItem("userRole"), // Asegúrate que esta clave coincida con lo que usas en Login
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");
    if (token) {
      setAuth({ isAuthenticated: true, role });
    }
  }, [setAuth]); // Asegúrate de que el efecto se ejecute al cambiar setAuth
  

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
