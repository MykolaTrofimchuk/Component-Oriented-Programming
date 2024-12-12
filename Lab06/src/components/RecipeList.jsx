import React, { useMemo, useState } from 'react';
import RecipeItem from './RecipeItem';
import useRecipeManager from '../hooks/useRecipeManager';

const RecipeList = () => {
    const { recipes } = useRecipeManager();
    const [filter, setFilter] = useState('All');

    const filteredRecipes = useMemo(() => {
        return filter === 'All'
            ? recipes
            : recipes.filter((recipe) => recipe.category === filter);
    }, [recipes, filter]);

    const sortedRecipes = useMemo(() => {
        return [...filteredRecipes].sort((a, b) => a.name.localeCompare(b.name));
    }, [filteredRecipes]);

    return (
        <div>
            <div className="filter-category">
                <label><b>Filter by Category: </b></label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Appetizer">Appetizer</option>
                </select>
            </div>
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