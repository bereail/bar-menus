import React from "react";
import { useNavigate } from "react-router-dom"; // Cambiado para React
import { MdFastfood, MdLocalDrink } from "react-icons/md"; // Importación correcta de íconos
import styles from '../Menu/RositMenu.style.module.css';
import HeaderInfo from '../../HeaderInfo';

const RositaMenu= () => {
  const navigate = useNavigate();
  const width = window.innerWidth;
  const buttonWidth = width * (window.innerWidth > 768 ? 0.4 : 0.7); // Ancho dinámico para botones

  // Datos de los botones
  const menuItems = [
    { id: "1", name: "Para Comer", icon: <MdFastfood />, screen: "/rositaComidas", category: "comidas" },
    { id: "2", name: "Para Tomar", icon: <MdLocalDrink />, screen: "/rositaBebidas", category: "bebidas" },
  ];
  
  return (
    <div className={styles.container}>
      {/* Header */}
      <HeaderInfo />

      {/* Title */}
      <h1 className={styles.title}>Menú</h1>

      {/* Lista de botones */}
      <div className={styles.listContainer}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={styles.button}
            style={{ width: `${buttonWidth}px` }}
            onClick={() => navigate(item.screen)}
          >
            <div className={styles.buttonContent}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.buttonText}>{item.name}</span>
            </div>
          </button>
        ))}
      </div>

    </div>
  );
};

export default RositaMenu;