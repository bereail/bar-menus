import React, { useState } from 'react';
import axios from 'axios';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [sectionId, setSectionId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryData = { name, sectionId };

    axios.post('https://localhost:7119/api/category/{sectionId}', categoryData) // Cambia la URL si es necesario
      .then(response => {
        setMessage('Categoría creada exitosamente');
        setName('');
        setSectionId('');
      })
      .catch(error => {
        setMessage('Error al crear la categoría');
      });
  };

  return (
    <div>
      <h2>Crear Nueva Categoría</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la Categoría</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>ID de la Sección</label>
          <input
            type="number"
            value={sectionId}
            onChange={(e) => setSectionId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Categoría</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateCategory;
