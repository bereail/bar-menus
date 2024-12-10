import React from "react";
import styles from "../MenuItem.module.css"; // Importa los estilos del módulo CSS

const MenuItem = ({ name, price, description }) => (
  <>
    <div className={styles.item}>
      {/* Contenedor para el nombre y la descripción */}
      <div className={styles.textContainer}>
        <span className={styles.itemName}>{name}</span>
        <span className={styles.itemDescription}>{description}</span>
      </div>

      {/* Precio alineado a la derecha y a la altura de la descripción */}
      <span className={styles.itemPrice}>${price}</span>
    </div>
    <div className={styles.separator} />
  </>
);

export default MenuItem;
