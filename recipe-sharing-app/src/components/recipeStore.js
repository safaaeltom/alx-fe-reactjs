import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => 
    set((state) => ({ 
      recipes: [...state.recipes, newRecipe],
     })),

  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  searchTerm: '',
  setSearchTerm: (term) => set({  searchTerm: term}),
  filteredRecipes: [],
  filteredRecipes: () => set(state => ({
  filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  
  
  

  

  
}));
