import { RecipeProvider } from "./context/RecipeContext";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";

const App = () => {
    return (
        <RecipeProvider>
            <div>
                <h1>Recipe Book</h1>
                <RecipeForm />
                <RecipeList />
            </div>
        </RecipeProvider>
    );
};

export default App;
