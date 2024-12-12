import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const useRecipeManager = () => {
    const { recipes, addRecipe, deleteRecipe } = useContext(RecipeContext);
    return { recipes, addRecipe, deleteRecipe };
};

export default useRecipeManager;