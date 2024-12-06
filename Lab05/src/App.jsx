import { RecipeProvider } from "./context/RecipeContext";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeFilters from "./components/RecipeFilters";

const App = () => {
    return (
        <RecipeProvider>
            <div>
                <h1>Recipe Book</h1>
                <RecipeForm />
                <RecipeFilters />
                <RecipeList />
            </div>
        </RecipeProvider>
    );
};

export default App;
