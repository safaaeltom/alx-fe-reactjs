import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // 🔍 Separate validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients.";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(); // ✅ use validate()
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ title, ingredients, steps });
      alert("Recipe submitted successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Add a New Recipe</h2>

      {/* Title */}
      <div>
        <label className="block font-medium mb-1">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block font-medium mb-1">Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
          rows="3"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps */}
      <div>
        <label className="block font-medium mb-1">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
          rows="4"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
