const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#2c3e50",
    padding: "10px 20px",
    color: "#ecf0f1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Sombra opcional
    zIndex: 1000, // Asegura que esté por encima de otros elementos
    boxSizing: "border-box", // Incluye padding en el ancho total
  },
  navbarBrand: {
    fontSize: "1.8rem",
    margin: 0,
  },
  navbarLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navbarLinksItem: {
    textDecoration: "none",
    color: "#ecf0f1",
    fontSize: "1.2rem",
    transition: "color 0.3s ease",
  },
  navbarLinksItemHover: {
    color: "#3498db", // No se puede agregar `:hover` directamente
  },
  logoutButton: {
    background: "none",
    border: "2px solid #e74c3c",
    color: "#e74c3c",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  logoutButtonHover: {
    backgroundColor: "#e74c3c",
    color: "#fff", // No se puede agregar `:hover` directamente
  },
};
