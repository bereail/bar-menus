// api.js
const API_BASE_URL = "https://localhost:7119/api/Product";

export const getMenuData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error("Error al obtener los datos del menú");
    }
    return await response.json();
  } catch (error) {
    console.error("Error en la API:", error);
    throw error;
  }
};
