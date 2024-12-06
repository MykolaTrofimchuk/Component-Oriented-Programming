import { useStore } from "effector-react";
import { $filteredRecipes, removeRecipe } from "../models/recipeModel";

const RecipeList = () => {
    const recipes = useStore($filteredRecipes);

    return (
        <ul>
            {recipes.length === 0 ? (
                <p>No recipes available.</p>
            ) : (
                recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <div>
                            <span>{recipe.title} - {recipe.category}</span>
                            <p>{recipe.description}</p> {/* description */}
                        </div>
                        <button onClick={() => removeRecipe(recipe.id)}>Delete</button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default RecipeList;
