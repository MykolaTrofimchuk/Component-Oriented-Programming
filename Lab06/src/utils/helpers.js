export const formatRecipeName = (name) => {
    return name.trim().toLowerCase().replace(/\s+/g, '-');
};

export const validateRecipe = (recipe) => {
    if (!recipe.name || !recipe.details) {
        throw new Error('Name and details are required.');
    }
};