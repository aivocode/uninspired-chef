import { useState } from 'react';
import { FullRecipePopout } from '../FullRecipePopout/FullRecipePopout';

export const SuggestionsCard = ({ uriKey, suggestion }) => {
  if (!suggestion) {
    return 
}
  console.log(suggestion)
  const meal = suggestion.recipe
  const missingIngs = suggestion.missingIngredients.toString().replaceAll(',',', ')
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
        <div className="save-recipe-button"></div>
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
