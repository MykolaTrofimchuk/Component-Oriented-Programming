import React, { useState } from 'react';
import useRecipeManager from '../hooks/useRecipeManager';
import { formatRecipeName, validateRecipe } from '../utils/helpers';

const RecipeForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('Dessert');
    const { addRecipe } = useRecipeManager();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const formattedName = formatRecipeName(name);
            validateRecipe({ name: formattedName, description, details });
            addRecipe({
                id: Date.now(),
                name: formattedName,
                description: description || 'none',
                details,
                category,
                createdAt: new Date().toLocaleString(),
            });
            setName('');
            setDescription('');
            setDetails('');
            setCategory('Dessert');
        } catch (error) {
            alert(error.message);
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
                    maxLength={16}
                />
            </div>
            <div>
                <label>Details: </label>
                <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                ></textarea>
            </div>
            <div>
                <label>Category: </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Dessert">Dessert</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Appetizer">Appetizer</option>
                </select>
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;