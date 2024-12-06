import { useContext, useState } from "react";
import RecipeContext from "../context/RecipeContext";

const RecipeForm = () => {
    const { dispatch } = useContext(RecipeContext);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (title.trim() && category.trim()) {
            dispatch({
                type: "ADD_RECIPE",
                payload: { id: Date.now(), title, category }
            });
            setTitle("");
            setCategory("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Recipe title"
            />
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Select category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
            </select>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;
