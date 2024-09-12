import imagen from "../../public/images/logo.png";
import { motion } from "framer-motion";
import { NavbarDashboard } from "./NavbarDashboard";
import "./general.css";

export const Dashboard = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 mb-4 d-flex justify-content-center espacio">
            <motion.div
              whileHover={{ scale: 0.4, rotate: -45 }}
              whileTap={{
                scale: 0.5,
                rotate: -75,
                borderRadius: "50%",
              }}
              className="col-12 col-md-6 d-flex justify-content-center mt-3"
            >
              <h1 className="display-1 text-center espacio mt-1">
                <strong className="fw-bold">Bienvenido</strong>
              </h1>
            </motion.div>
          </div>
          <motion.div
            whileHover={{ scale: 0.5, rotate: 45 }}
            whileTap={{
              scale: 0.5,
              rotate: -90,
              borderRadius: "50%",
            }}
            className="col-12 col-md-6 d-flex justify-content-center mt-4"
          >
            <img src={imagen} alt="Logo" className="img-fluid mt-4" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
