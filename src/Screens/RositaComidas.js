import React from "react";
import styles from "./RositaComidas.module.css"; // Importamos CSS Modules
import HeaderInfo from "../Components/HeaderInfo";
import MenuDataBebidas from "./Menu/MenuData/MenuDataBebidas";
import MenuItem from "./Menu/MenuItem/MenuItem";

const RositaComidas = () => {
  // Obtenemos las dimensiones de la ventana
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Calculamos dinámicamente el tamaño de la fuente y el margen
  const dynamicFontSize = Math.min(Math.max(width * 0.05, 16), 45);
  const dynamicMargin = Math.min(Math.max(height * 0.05, 25), 60);

  return (
    <div className={styles.container}>
      {/* Componente desplazable */}
      <div className={styles.scrollContainer}>
        {/* Encabezado del menú */}
        <HeaderInfo />

        {/* Renderizamos las categorías del menú */}
        {MenuDataBebidas.map((category) => (
          <div
            key={category.category}
            className={styles.category}
            style={{ marginBottom: `${dynamicMargin}px` }}
          >
            {/* Título de la categoría con tamaño de fuente dinámico */}
            <h2
              className={styles.categoryTitle}
              style={{ fontSize: `${dynamicFontSize}px` }}
            >
              {category.category}
            </h2>
            {/* Renderizamos los ítems de cada categoría */}
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

export default RositaComidas;
