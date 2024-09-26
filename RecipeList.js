import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await axios.get('/api/recipes');
            setRecipes(response.data);
        };
        fetchRecipes();
    }, []);

    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
