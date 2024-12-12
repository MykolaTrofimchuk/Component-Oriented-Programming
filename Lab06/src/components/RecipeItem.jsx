import React, { memo } from 'react';
import useRecipeManager from '../hooks/useRecipeManager';

const RecipeItem = memo(({ recipe }) => {
    const { deleteRecipe } = useRecipeManager();

    return (
        <li>
            <strong>{recipe.name}</strong> - {recipe.description}
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </li>
    );
});

export default RecipeItem;