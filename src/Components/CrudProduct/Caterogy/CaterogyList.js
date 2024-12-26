import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Solicitar categorías desde la API
    axios.get('https://localhost:7119/api/category') // Cambia la URL si es necesario
      .then(response => {
        setCategories(response.data);
      })
      .catch(err => {
        setError('Error al obtener las categorías');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Categorías</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
