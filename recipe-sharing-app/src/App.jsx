import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
function App() {
  return (
    <BrowserRouter>
      <SearchBar />

      <AddRecipeForm />
      <RecipeList />

      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>

      <FavoritesList/>
      <RecommendationsList/>
    </BrowserRouter>
  );
}


export default App;
