import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditCategory from './EditCategory'; // Assuming you have this component

const ProductList = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://localhost:7119/api/Product');
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching categories.');
                setLoading(false);
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleEdit = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const closeEdit = () => {
        setSelectedCategory(null);
    };

    if (loading) {
        return <p>Loading categories...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Categories</h2>
            {selectedCategory ? (
                <div>
                    <h3>Edit Category</h3>
                    <EditCategory categoryId={selectedCategory} closeEdit={closeEdit} />
                </div>
            ) : (
                <div>
                    {categories.length === 0 ? (
                        <p>No categories available.</p>
                    ) : (
                        <ul>
                            {categories.map((category) => (
                                <li key={category.id || category.name}> {/* Fallback to category.name if id is not available */}
                                    {category.name} - {category.sectionId}
                                    <button onClick={() => handleEdit(category.id)}>Edit</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductList;
