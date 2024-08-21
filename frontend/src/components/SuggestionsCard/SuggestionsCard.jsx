import { useState } from "react";
import { FullRecipePopout } from "../FullRecipePopout/FullRecipePopout";
import { NutritionPopout } from "../NutritionPopout/NutritionPopout";
export const SuggestionsCard = ({ uriKey, suggestion }) => {
  if (!suggestion) {
    return;
  }
  console.log(suggestion);
  const meal = suggestion.recipe;
  const missingIngs = suggestion.missingIngredients
    .toString()
    .replaceAll(",", ", ");

  const [showPopout, setShowPopout] = useState(false);
  const [showNutrition, setShowNutrition] = useState(false);

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
        <i>
          missing ingredients:
          <br />
          <br />
          {missingIngs}
        </i>
        {/* {saved && <div className="bookmark" />} */}
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
