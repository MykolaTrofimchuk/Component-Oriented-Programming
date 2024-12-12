import React, { useState } from 'react';
import useRecipeManager from '../hooks/useRecipeManager';

const RecipeForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { addRecipe } = useRecipeManager();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description) {
            addRecipe({ id: Date.now(), name, description });
            setName('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description: </label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;