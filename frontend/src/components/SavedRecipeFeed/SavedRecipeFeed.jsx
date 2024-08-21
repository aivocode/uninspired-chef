import { SavedRecipeCard } from "../SavedRecipeCard/SavedRecipeCard";
import './SavedRecipeFeed.css';

export const SavedRecipeFeed = ({ savedRecipes }) => {

  return (
    <div className="recipe-feed">
      {savedRecipes.length === 0 ? (
        <p>No saved recipes found</p>
      ) : (
        savedRecipes.map((savedRecipe) => (
          <SavedRecipeCard
            key={savedRecipe.recipe.recipe.shareAs}
            shareAs={savedRecipe.recipe.recipe.shareAs}
            savedRecipe={savedRecipe}
          />
        ))
      )}
    </div>
  );
};
