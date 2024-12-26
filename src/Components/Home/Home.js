import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import RositaNavbar from "../Navbar/RositaNavbar";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/menuRosita");
  };

  return (
    <div className={styles.container}>
      <RositaNavbar />
      <h1>Home</h1>
      <div className={styles.card} onClick={handleNavigation}>
        <h2 className={styles.cardTitle}>Rosita Lo Descorcha</h2>
      </div>
    </div>
  );
};

export default Home;
