import { useState, useEffect } from 'react';
import { FullRecipePopout } from '../FullRecipePopout/FullRecipePopout';
import { getFavouriteRecipes, removeRecipeFromFavourites, addRecipeToFavourites } from '../../services/services';
import { NutritionPopout } from "../NutritionPopout/NutritionPopout";

export const RecipeCard = ({ recipe, buttonPressed }) => {
  if (buttonPressed === 0) {
    return;
  }
  if (!recipe) {
    return "We couldn't find a direct match sadly. But here are some suggestions!";
  }

  const [showPopout, setShowPopout] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false); // state to determine whether or not recipe is bookmarked already i.e. favourited
  const [showNutrition, setShowNutrition] = useState(false);
  const token = localStorage.getItem("token");
  // console.log(recipe);

  // check if recipe is in favouritedRecipes array on initial render
  useEffect(() => {
    const checkIfFavourite = async () => {
      try {
        // check if recipe is already included in user's favourites (if no favourites yet, some function will resolve to false)
        const favouritedRecipes = await getFavouriteRecipes(token);
        console.log(favouritedRecipes);
        const recipeIsInFavourites = favouritedRecipes.some((favouritedRecipe) => favouritedRecipe.recipe.shareAs === recipe.recipe.shareAs);
        console.log(recipeIsInFavourites);
        // update state variable with result of recipeIsInFavourites i.e. true or false
        setIsFavourite(recipeIsInFavourites);
      } catch (err) {
        // console.error(err);
      }
    };

    checkIfFavourite();
  },[recipe, token]); // useEffect dependencies

  // handler to toggle bookmark (action dependent on favourite status of recipe)
  const handleBookmarkClick = async () => {
    const input = recipe;
    console.log("this is the recipe: ", recipe)
    console.log(isFavourite);
    try {
      if (isFavourite) {
        await removeRecipeFromFavourites(token, input);
        setIsFavourite(false);
        window.alert('Recipe removed from favourites!')
      } else {
        await addRecipeToFavourites(token, input);
        setIsFavourite(true);
        window.alert('Recipe added to favourites!');
      }
    } catch (err){
      console.error(err);
    }
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const handleSeeMoreClick = () => {
    setShowPopout(true);
  };

  const handleClosePopout = () => {
    setShowPopout(false);
  };
  // on click function for show nutrition button
  const handleNutritionClick = () => {
    setShowNutrition(true);
  };
  const handleCloseNutritionPopout = () => {
    setShowNutrition(false);
  };

  const replacements = recipe.suggestedReplacements;

  return (
    <>
      <div className="recipe-card">
        <img
          className="image-placeholder"
          src={recipe.recipe.images.REGULAR.url}
        />
        <div className="recipe-details">
          <h3>{recipe.recipe.label}</h3>
          {/* <p>{description}</p> */}
          <button onClick={handleSeeMoreClick}>See more</button>
          <button onClick={handleNutritionClick}>Nutrition</button>
          <a onClick={toggleExpansion}>
            {isExpanded ? "Hide Replacements" : "Show Replacements"}
          </a>
          {isExpanded && (
            <ul>
              {replacements.map((replacement, index) => (
                <li key={index}>{replacement}</li>
              ))}
            </ul>
          )}
        </div>
        <button 
          className={`save-recipe-button ${isFavourite ? 'favourited' : 'not-favourited'}`}
          onClick={handleBookmarkClick}> 
        </button>
        {/* {saved && <div className="bookmark" />} */}
      </div>

      {showPopout && (
        <div className="popout-overlay">
          <FullRecipePopout recipe={recipe} onClose={handleClosePopout} />
        </div>
      )}
      {showNutrition && (
        <div className="popout-overlay">
          <NutritionPopout
            recipe={recipe}
            closeMe={handleCloseNutritionPopout}
          />
        </div>
      )}
    </>
  );
};
