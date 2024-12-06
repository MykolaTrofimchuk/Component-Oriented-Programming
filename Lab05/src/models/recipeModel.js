import { createEvent, createStore } from "effector";

export const addRecipe = createEvent();
export const removeRecipe = createEvent();
export const filterRecipes = createEvent();

export const $recipes = createStore([])
    .on(addRecipe, (state, recipe) => [...state, recipe])
    .on(removeRecipe, (state, id) => state.filter(recipe => recipe.id !== id));

export const $filter = createStore("all").on(filterRecipes, (_, filter) => filter);

export const $filteredRecipes = $recipes.map((recipes) => {
    const currentFilter = $filter.getState();
    if (currentFilter === "all") return recipes;
    return recipes.filter(recipe => recipe.category === currentFilter);
});
