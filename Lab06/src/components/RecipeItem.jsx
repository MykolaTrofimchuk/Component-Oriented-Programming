import React, { memo } from 'react';
import useRecipeManager from '../hooks/useRecipeManager';
import RecipeDetails from './RecipeDetails';

const RecipeItem = memo(({ recipe }) => {
    const { deleteRecipe } = useRecipeManager();

    return (
        <li>
            <strong>{recipe.name}</strong> - {recipe.description || 'none'}
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            <RecipeDetails recipe={recipe} />
        </li>
    );
});

export default RecipeItem;