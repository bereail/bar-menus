import React from "react";
import styles from "./RositaBebidas.module.css"; // Importamos CSS Modules
import HeaderInfo from "../Components/HeaderInfo";
import MenuDataComidas from "./Menu/MenuData/MenuDataComidas";
import MenuItem from "./Menu/MenuItem/MenuItem";

const RositaBebidas = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Calculamos dinámicamente el tamaño de la fuente y el margen
  const dynamicFontSize = Math.min(Math.max(width * 0.05, 16), 45);
  const dynamicMargin = Math.min(Math.max(height * 0.05, 25), 60);

  return (
    <div className={styles.container}>
      <div
        className={styles.scrollContainer}
        style={{ padding: `0 ${Math.min(width * 0.05, 60)}px` }}
      >
        {/* Encabezado */}
        <div style={{ marginBottom: `${dynamicMargin}px` }}>
          <HeaderInfo />
        </div>

        {/* Categorías del menú */}
        {MenuDataComidas.map((category) => (
          <div
            key={category.category}
            className={styles.category}
            style={{ marginBottom: `${dynamicMargin}px` }}
          >
            <h2
              className={styles.categoryTitle}
              style={{ fontSize: `${dynamicFontSize}px` }}
            >
              {category.category}
            </h2>
            {category.items.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RositaBebidas;
