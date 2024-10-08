import { useState, useEffect } from 'react';
import { FullRecipePopout } from '../FullRecipePopout/FullRecipePopout';
import { getFavouriteRecipes, removeRecipeFromFavourites, addRecipeToFavourites } from '../../services/services';
import { NutritionPopout } from "../NutritionPopout/NutritionPopout";

export const SuggestionsCard = ({ shareAs, suggestion }) => {
  const token = localStorage.getItem("token");

  console.log("Suggestion:", suggestion)
  const meal = suggestion.recipe
  const missingIngs = suggestion.missingIngredients.toString().replaceAll(',',', ')

  const [showPopout, setShowPopout] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false); // state to determine whether or not recipe is bookmarked already i.e. favourited
  const [showNutrition, setShowNutrition] = useState(false);

  // check if recipe is in favouritedRecipes array on initial render
  useEffect(() => {
    const checkIfFavourite = async () => {
      try {
        // check if recipe is already included in user's favourites (if no favourites yet, some function will resolve to false)
        const favouritedRecipes = await getFavouriteRecipes(token);
        const recipeIsInFavourites = favouritedRecipes.some((favouritedRecipe) => favouritedRecipe.recipe.shareAs === shareAs);
        // update state variable with result of recipeIsInFavourites i.e. true or false
        setIsFavourite(recipeIsInFavourites);
      } catch (err) {
        // console.error(err);
      }
    };

    checkIfFavourite();
  }, [shareAs, token]); // useEffect dependencies (shareAs = link to recipe on Edamam website)

  // handler to toggle bookmark (action dependent on favourite status of recipe)
  const handleBookmarkClick = async () => {
    try {
      if (isFavourite) {
        await removeRecipeFromFavourites(token, suggestion);
        setIsFavourite(false);
        window.alert('Recipe removed from favourites!')
      } else {
        await addRecipeToFavourites(token, suggestion);
        setIsFavourite(true);
        window.alert('Recipe added to favourites!');
      }
    } catch (err){
      console.error(err);
    }
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

  if (!suggestion) {
    return null;
  }

  return (
    <>
      <div className="recipe-card">
        <img
          className="image-placeholder"
          src={meal.recipe.images.REGULAR.url}
        />
        <div className="recipe-details">
          <h3>{meal.recipe.label}</h3>
          {/* <p>{description}</p> */}
          <button onClick={handleSeeMoreClick}>See more</button>
          <button onClick={handleNutritionClick}>Nutrition</button>
        </div>
        <button 
          className={`save-recipe-button ${isFavourite ? 'favourited' : 'not-favourited'}`}
          onClick={handleBookmarkClick}> 
        </button>
        <i>missing ingredients: 
          <br /><br />{missingIngs}</i>
      </div>

      {showPopout && (
        <div className="popout-overlay">
          <FullRecipePopout recipe={meal} onClose={handleClosePopout} />
        </div>
      )}
      {showNutrition && (
        <div className="popout-overlay">
          <NutritionPopout recipe={meal} closeMe={handleCloseNutritionPopout} />
        </div>
      )}
    </>
  );
};
