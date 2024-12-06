import { useState } from "react";
import { addRecipe } from "../models/recipeModel";

const RecipeForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && category.trim()) {
            addRecipe({ id: Date.now(), title, category, description });
            setTitle("");
            setCategory("");
            setDescription("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe title"
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
            </select>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Recipe description"
                rows="4"
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;
