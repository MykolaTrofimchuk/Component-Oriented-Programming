import { useStore } from "effector-react";
import { filterRecipes, $filter } from "../models/recipeModel";

const RecipeFilters = () => {
    const currentFilter = useStore($filter);

    return (
        <div>
            <button
                onClick={() => filterRecipes("all")}
                style={{ fontWeight: currentFilter === "all" ? "bold" : "normal" }}
            >
                All
            </button>
            <button
                onClick={() => filterRecipes("breakfast")}
                style={{ fontWeight: currentFilter === "breakfast" ? "bold" : "normal" }}
            >
                Breakfast
            </button>
            <button
                onClick={() => filterRecipes("lunch")}
                style={{ fontWeight: currentFilter === "lunch" ? "bold" : "normal" }}
            >
                Lunch
            </button>
            <button
                onClick={() => filterRecipes("dinner")}
                style={{ fontWeight: currentFilter === "dinner" ? "bold" : "normal" }}
            >
                Dinner
            </button>
        </div>
    );
};

export default RecipeFilters;
