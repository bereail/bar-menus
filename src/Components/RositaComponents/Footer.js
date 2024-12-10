import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MdFastfood, MdLocalDrink } from 'react-icons/md';
import styles from './Footer.module.css'; // Ruta correcta al CSS

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para verificar si la ruta actual es la ruta seleccionada
  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.footer}>
      {/* Botón para "Para Comer" */}
      <button
        className={`${styles.footerButton} ${isActive("/rositaComidas") ? styles.active : ""}`}
        onClick={() => navigate("/rositaComidas")}
      >
        <MdFastfood
          className={`${styles.icon} ${isActive("/rositaComidas") ? styles.activeIcon : ""}`}
        />
        Para Comer
      </button>

      {/* Botón para "Para Tomar" */}
      <button
        className={`${styles.footerButton} ${isActive("/rositaBebidas") ? styles.active : ""}`}
        onClick={() => navigate("/rositaBebidas")}
      >
        <MdLocalDrink
          className={`${styles.icon} ${isActive("/rositaBebidas") ? styles.activeIcon : ""}`}
        />
        Para Tomar
      </button>
    </div>
  );
};

export default Footer;
