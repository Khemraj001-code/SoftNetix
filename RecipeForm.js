import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/recipes', { title, ingredients, instructions });
        // Reset the form or handle after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe Title" required />
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" required />
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" required />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;
