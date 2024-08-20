import { useState, useEffect } from 'react';
import { FullRecipePopout } from '../FullRecipePopout/FullRecipePopout';
import { getFavouriteRecipes, removeRecipeFromFavourites, addRecipeToFavourites } from '../../services/recipes';

export const SuggestionsCard = ({ uriKey, suggestion, index, suggestionsData }) => {
  const token = localStorage.getItem("token");


  // console.log(suggestion)
  const meal = suggestion.recipe
  const missingIngs = suggestion.missingIngredients.toString().replaceAll(',',', ')

  const [showPopout, setShowPopout] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false); // state to determine whether or not recipe is bookmarked already i.e. favourited
  // console.log(index);
  console.log(suggestionsData.suggestionsData);
  // console.log(suggestionsData);
  // check if recipe is in favouritedRecipes array on initial render
  useEffect(() => {
    const checkIfFavourite = async () => {
      try {
        const favouritedRecipes = await getFavouriteRecipes(token);
        const recipeIsInFavourites = favouritedRecipes.some((favouritedRecipe) => favouritedRecipe.recipe.uri === uriKey);
        setIsFavourite(recipeIsInFavourites);
      } catch (err) {
        // console.error(err);
      }
    };

    checkIfFavourite();
  }, [uriKey, token]);

  // handler to toggle bookmark (action dependent on favourite status of recipe)
  const handleBookmarkClick = async (buttonIndex) => {
    console.log(buttonIndex);
    console.log(suggestionsData.suggestionsData[buttonIndex]);
    try {
      if (isFavourite) {
        await removeRecipeFromFavourites(token, suggestionsData.suggestionsData[buttonIndex]);
        setIsFavourite(false);
        window.alert('Recipe removed from favourites!')
      } else {
        await addRecipeToFavourites(token, suggestionsData.suggestionsData[buttonIndex]);
        setIsFavourite(true);
        window.alert('Recipe added to favourites!');
      }
    } catch (err){
      // console.error(err);
    }
  };

  const handleSeeMoreClick = () => {
    setShowPopout(true);
  };

  const handleClosePopout = () => {
    setShowPopout(false);
  };

  if (!suggestion) {
    return null;
  }

  return (
    <>
      <div className="recipe-card">
        <img className="image-placeholder" src={meal.recipe.images.REGULAR.url}/>
        <div className="recipe-details">
          <h3>{meal.recipe.label}</h3>
          {/* <p>{description}</p> */}
          <button onClick={handleSeeMoreClick}>See more</button>
        </div>
        <button 
          className={`save-recipe-button ${isFavourite ? 'favourited' : 'not-favourited'}`}
          onClick={ () => handleBookmarkClick(index)}> 
        </button>
        <i>missing ingredients: 
          <br /><br />{missingIngs}</i>
      </div>

      {showPopout && (
        <div className="popout-overlay">
          <FullRecipePopout recipe={meal} onClose={handleClosePopout} />
        </div>
      )}
    </>
  );
};
