import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700">{recipe.summary}</p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {/* Example: you can add ingredients in your data.json later */}
            {recipe.ingredients
              ? recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
              : <li>Ingredients not provided.</li>}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {recipe.instructions
              ? recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)
              : <li>Instructions not provided.</li>}
          </ol>
        </section>
      </div>
    </div>
  );
}

export default RecipeDetail;
