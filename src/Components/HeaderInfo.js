import React from "react";
import { MdLocationOn } from "react-icons/md"; // Ícono de ubicación
import { FaInstagram } from "react-icons/fa"; // Ícono de Instagram
import styles from "./HeaderInfo.module.css"; // Importa los estilos del módulo CSS

const HeaderInfo = () => {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <img
        src={require("../assets/img/Logo.png")} // Ruta de tu logo
        className={styles.logo}
        alt="Logo"
      />

      {/* Dirección con ícono de ubicación */}
      <a
        href="https://www.google.com/maps/@-32.9475624,-60.6613917,3a,75y,86.23h,87.96t/data=!3m7!1e1!3m5!1sI7AnEXVsk3g80W6QyzCHZg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D2.0372146538185376%26panoid%3DI7AnEXVsk3g80W6QyzCHZg%26yaw%3D86.23379093935569!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.addressContainer}
      >
        <MdLocationOn className={styles.icon} />
        <span className={styles.address}>Callao 1195, Rosario</span>
      </a>

      {/* Instagram con ícono */}
      <a
        href="https://www.instagram.com/rositalodescorcha"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.instagramContainer}
      >
        <FaInstagram className={styles.icon} />
        <span className={styles.instagram}>/Rositalodescorcha</span>
      </a>
    </div>
  );
};

export default HeaderInfo;