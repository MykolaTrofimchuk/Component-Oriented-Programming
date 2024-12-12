import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    const addRecipe = (recipe) => {
        setRecipes((prev) => [...prev, recipe]);
    };

    const deleteRecipe = (id) => {
        setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
    };

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};