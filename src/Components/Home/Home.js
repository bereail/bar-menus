import React from "react";
import { useNavigate } from "react-router-dom"; // Para manejar la navegación
import styles from "./Home.module.css"; // Importa un archivo CSS si necesitas estilos personalizados

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/menuRosita"); // Navega al path deseado
  };

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      {/* Card */}
      <div className={styles.card} onClick={handleNavigation}>
        <h2 className={styles.cardTitle}>Rosita Lo Descorcha</h2>
      </div>
    </div>
  );
};

export default Home;
