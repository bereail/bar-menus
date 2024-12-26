import React, { useEffect, useState } from "react";
import { getMenuData } from "../Data/API";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getMenuData();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError("Formato de datos inválido.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  const categoryMapping = {
    comidas: [1, 2],
    bebidas: [7],
  };

  const filteredProducts = products.filter((product) => {
    const validCategories = categoryMapping[category] || [];
    return validCategories.includes(product.categoryId);
  });

  return (
    <div>
      <h1>Productos: {category === "comidas" ? "Comidas" : "Bebidas"}</h1>
      {filteredProducts.length === 0 ? (
        <p>No hay productos disponibles en esta categoría.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Precio: <strong>${product.price}</strong></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
