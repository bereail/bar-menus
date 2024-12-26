import React, { useState, useEffect } from 'react';

const GetMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realizar la solicitud HTTP para obtener los datos del menú
    fetch('https://localhost:7119/api/Menu/GetMenu')
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {menuData.map((section) => (
        <div key={section.id}>
          <h2>{section.name}</h2>
          {section.categories.map((category) => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              {category.products.length > 0 ? (
                <ul>
                  {category.products.map((product) => (
                    <li key={product.id}>
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <p>Precio: ${product.price}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay productos en esta categoría.</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GetMenu;
