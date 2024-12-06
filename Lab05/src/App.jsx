import RecipeForm from "./components/RecipeForm";
import RecipeFilters from "./components/RecipeFilters";
import RecipeList from "./components/RecipeList";

const App = () => {
    return (
        <div>
            <h1>Recipe Book</h1>
            <RecipeForm />
            <RecipeFilters />
            <RecipeList />
        </div>
    );
};

export default App;
