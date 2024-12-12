import React, { useMemo } from 'react';
import RecipeItem from './RecipeItem';
import useRecipeManager from '../hooks/useRecipeManager';

const RecipeList = () => {
    const { recipes } = useRecipeManager();

    const sortedRecipes = useMemo(() => {
        return [...recipes].sort((a, b) => a.name.localeCompare(b.name));
    }, [recipes]);

    return (
        <div>
            <h2>Recipes</h2>
            {sortedRecipes.length > 0 ? (
                <ul>
                    {sortedRecipes.map((recipe) => (
                        <RecipeItem key={recipe.id} recipe={recipe} />
                    ))}
                </ul>
            ) : (
                <p>No recipes added yet.</p>
            )}
        </div>
    );
};

export default RecipeList;