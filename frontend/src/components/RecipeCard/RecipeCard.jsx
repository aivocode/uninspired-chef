import { useState } from "react";
import { FullRecipePopout } from "../FullRecipePopout/FullRecipePopout";
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
  const [showNutrition, setShowNutrition] = useState(false);

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
