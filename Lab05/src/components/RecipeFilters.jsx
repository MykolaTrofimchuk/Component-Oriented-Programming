import { useContext, useState } from "react";
import RecipeContext from "../context/RecipeContext";

const RecipeFilters = () => {
    const { recipes } = useContext(RecipeContext);
    const [filter, setFilter] = useState("all");

    const filteredRecipes = recipes.filter(recipe => {
        if (filter === "all") return true;
        return recipe.category === filter;
    });

    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("breakfast")}>Breakfast</button>
            <button onClick={() => setFilter("lunch")}>Lunch</button>
            <button onClick={() => setFilter("dinner")}>Dinner</button>
            <ul>
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id}>
                        {recipe.title} - {recipe.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeFilters;
