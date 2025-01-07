import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.styles'; // Importa el módulo de estilos
import { useAuth } from '../Login/AuthContext';

const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();  // Usamos el contexto de autenticación
  
    const handleLogout = () => {
      logout(); // Llama a la función logout del contexto
      window.location.href = '/'; // Redirige a la página de login o inicio
    };
  
    return (
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <h1 className={styles.navbarLinksItem}><Link to="/">MiApp</Link></h1>
        </div>
        <ul className={styles.navbarLinks}>
          {isLoggedIn ? (
            <>
              <li className={styles.navbarLinksItem}><Link to="/menuRosita">Menu</Link></li>
              <li className={styles.navbarLinksItem}><Link to="/secciones">Secciones</Link></li>
              <li className={styles.navbarLinksItem}><Link to="/categorias">Categorías</Link></li>
              <li className={styles.navbarLinksItem}><Link to="/productos">Productos</Link></li>
              <li className={styles.navbarLinksItem}><Link to="/allMenuRosita">Menu</Link></li>
              
              <li>
                <button className={styles.logoutButton} onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <li className={styles.navbarLinksItem}>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;