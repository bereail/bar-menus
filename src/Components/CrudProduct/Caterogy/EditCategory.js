import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Component for editing a single category
const EditCategory = ({ categoryId, closeEdit }) => {
  const [category, setCategory] = useState({
    name: '',
    sectionId: 0,
    products: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the category data to edit
    axios
      .get(`https://localhost:7119/api/Category/${categoryId}`)
      .then(response => {
        setCategory(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching category data:', error);
        setLoading(false);
      });
  }, [categoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory(prevCategory => ({
      ...prevCategory,
      [name]: value
    }));
  };

  const handleProductChange = (e, productId) => {
    const { name, value } = e.target;
    setCategory(prevCategory => ({
      ...prevCategory,
      products: prevCategory.products.map(product =>
        product.id === productId
          ? { ...product, [name]: value }
          : product
      )
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send PUT request to update the category
    axios
      .put(`https://localhost:7119/api/Category/${categoryId}`, category)
      .then(response => {
        alert('Category updated successfully!');
        closeEdit(); // Close the edit form after update
      })
      .catch(error => {
        console.error('Error updating category:', error);
        alert('There was an error updating the category.');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Category Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={category.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="sectionId">Section ID</label>
        <input
          type="number"
          id="sectionId"
          name="sectionId"
          value={category.sectionId}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>Products</h3>
        {category.products.length === 0 ? (
          <p>No products available in this category.</p>
        ) : (
          category.products.map((product) => (
            <div key={product.id}>
              <h4>Product: {product.name}</h4>
              <div>
                <label htmlFor={`productName-${product.id}`}>Name</label>
                <input
                  type="text"
                  id={`productName-${product.id}`}
                  name="name"
                  value={product.name}
                  onChange={(e) => handleProductChange(e, product.id)}
                />
              </div>
              <div>
                <label htmlFor={`productDescription-${product.id}`}>Description</label>
                <input
                  type="text"
                  id={`productDescription-${product.id}`}
                  name="description"
                  value={product.description}
                  onChange={(e) => handleProductChange(e, product.id)}
                />
              </div>
              <div>
                <label htmlFor={`productPrice-${product.id}`}>Price</label>
                <input
                  type="number"
                  id={`productPrice-${product.id}`}
                  name="price"
                  value={product.price}
                  onChange={(e) => handleProductChange(e, product.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <button type="submit">Update Category</button>
    </form>
  );
};




export default EditCategory;