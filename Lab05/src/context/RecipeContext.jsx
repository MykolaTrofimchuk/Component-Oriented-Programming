import { createContext, useReducer } from "react";

const RecipeContext = createContext();

const recipeReducer = (state, action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return [...state, action.payload];
        case "REMOVE_RECIPE":
            return state.filter(recipe => recipe.id !== action.payload);
        default:
            return state;
    }
};

export const RecipeProvider = ({ children }) => {
    const [recipes, dispatch] = useReducer(recipeReducer, []);

    return (
        <RecipeContext.Provider value={{ recipes, dispatch }}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeContext;
