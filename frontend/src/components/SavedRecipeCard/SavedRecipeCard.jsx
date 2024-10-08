import { useState, useEffect } from "react";
import { FullRecipePopout } from "../FullRecipePopout/FullRecipePopout";
import {
  getFavouriteRecipes,
  removeRecipeFromFavourites,
  addRecipeToFavourites,
} from "../../services/services";
import "./SavedRecipeCard.css";
import { NutritionPopout } from "../NutritionPopout/NutritionPopout";

export const SavedRecipeCard = ({ shareAs, savedRecipe }) => {
  // console.log("saved recipe:", savedRecipe);
  const token = localStorage.getItem("token");

  // console.log("Suggestion:" + suggestion)


  const meal = savedRecipe.recipe
  console.log("meal:", meal);

  // const missingIngs = savedRecipe.missingIngredients.toString().replaceAll(',',', ')

  const [showPopout, setShowPopout] = useState(false);
  const [isFavourite, setIsFavourite] = useState(true); // state to determine whether or not recipe is bookmarked already i.e. favourited
  const [showNutrition, setShowNutrition] = useState(false);

  // check if recipe is in favouritedRecipes array on initial render
  useEffect(() => {
    const checkIfFavourite = async () => {
      try {
        // check if recipe is already included in user's favourites (if no favourites yet, some function will resolve to false)
        const favouritedRecipes = await getFavouriteRecipes(token);
        const recipeIsInFavourites = favouritedRecipes.some(
          (favouritedRecipe) =>
            favouritedRecipe.recipe.recipe.shareAs === shareAs
        );
        // update state variable with result of recipeIsInFavourites i.e. true or false
        setIsFavourite(recipeIsInFavourites);
      } catch (err) {
        // console.error(err);
      }
    };

    checkIfFavourite();
  }); // useEffect dependencies (shareAs = link to recipe on Edamam website)

  // handler to toggle bookmark (action dependent on favourite status of recipe)
  const handleBookmarkClick = async () => {
    try {
      if (isFavourite) {
        await removeRecipeFromFavourites(token, savedRecipe);
        setIsFavourite(false);
        window.alert("Recipe removed from favourites!");
      } else {
        await addRecipeToFavourites(token, savedRecipe);
        setIsFavourite(true);
        window.alert("Recipe added to favourites!");
      }
    } catch (err) {
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

  if (!savedRecipe) {
    return null;
  }

  return (
    <>
      <div className="recipe-card">
        <img 
          className="image-placeholder" 
          src={meal.images.REGULAR.url}
        />
        <div className="recipe-details">
        <button
          className={`save-recipe-button ${
            isFavourite ? "favourited" : "not-favourited"
          }`}
          onClick={handleBookmarkClick}
        ></button>
        <div className="label-container">
          <h3>{meal.label}</h3>
          </div>
          <div className="recipe-button-container">
          <button onClick={handleSeeMoreClick}>See more</button>
          <button onClick={handleNutritionClick}>Nutrition</button>
          </div>
        </div>

        {/* <i>missing ingredients:  */}
        {/* <br /><br />{missingIngs}</i> */}
      </div>

      {showPopout && (
        <div className="popout-overlay">
          <FullRecipePopout recipe={savedRecipe} onClose={handleClosePopout} />
        </div>
      )}
      {showNutrition && (
        <div className="popout-overlay">
          <NutritionPopout
            recipe={savedRecipe}
            closeMe={handleCloseNutritionPopout}
          />
        </div>
      )}
    </>
  );
};
