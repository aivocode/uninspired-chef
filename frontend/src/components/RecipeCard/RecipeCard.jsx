import { useState } from 'react';
import { FullRecipePopout } from '../FullRecipePopout/FullRecipePopout';

export const RecipeCard = ({ recipe }) => {
  if (!recipe) {
    return "We couldn't find a direct match sadly. But here are some suggestions!"
}
  console.log(recipe.suggestions[0])
  const meal = recipe.suggestions[0].recipe
  const missingIngs = recipe.suggestions[0].missingIngredients.toString().replaceAll(',',', ')
  const [showPopout, setShowPopout] = useState(false);

  const handleSeeMoreClick = () => {
    setShowPopout(true);
  };

  const handleClosePopout = () => {
    setShowPopout(false);
  };

  return (
    <>
      <div className="recipe-card">
        <img className="image-placeholder" src={meal.recipe.images.REGULAR.url}/>
        <div className="recipe-details">
          <h3>{meal.recipe.label}</h3>
          {/* <p>{description}</p> */}
          <button onClick={handleSeeMoreClick}>See more</button>
        </div>
        <i>missing ingredients: 
          <br /><br />{missingIngs}</i>
        {/* {saved && <div className="bookmark" />} */}
      </div>

      {showPopout && (
        <div className="popout-overlay">
          <FullRecipePopout recipe={meal} onClose={handleClosePopout} />
        </div>
      )}
    </>
  );
};
