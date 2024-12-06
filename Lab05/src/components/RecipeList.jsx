import { useContext } from "react";
import RecipeContext from "../context/RecipeContext";

const RecipeList = () => {
    const { recipes, dispatch } = useContext(RecipeContext);

    return (
        <ul>
            {recipes.map(recipe => (
                <li key={recipe.id}>
                    <span>{recipe.title} - {recipe.category}</span>
                    <button onClick={() => dispatch({ type: "REMOVE_RECIPE", payload: recipe.id })}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default RecipeList;
