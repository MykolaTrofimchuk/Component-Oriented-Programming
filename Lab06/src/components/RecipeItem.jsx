import React, { memo } from 'react';
import useRecipeManager from '../hooks/useRecipeManager';
import RecipeDetails from './RecipeDetails';

const RecipeItem = memo(({ recipe }) => {
    const { deleteRecipe } = useRecipeManager();

    return (
        <li>
            <h2><strong>{recipe.name}</strong></h2>
            <i>{recipe.category}</i>
            <RecipeDetails recipe={recipe} />
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </li>
    );
});

export default RecipeItem;