import { RecipeCard } from "../RecipeCard/RecipeCard";
import './RecipeFeed.css';

export const RecipeFeed = () => {
  // Example data, this will be replaced by JSON data in future
  const recipes = [
    { id: 1, title: "Recipe 1", description: "Short description of the recipe", saved: false },
    { id: 2, title: "Recipe 2", description: "Short description of the recipe", saved: true },
    { id: 3, title: "Recipe 3", description: "Short description of the recipe", saved: false },
    // Add more recipes as needed
  ];

  return (
    <div className="recipe-feed">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          saved={recipe.saved}
        />
      ))}
    </div>
  );
};
