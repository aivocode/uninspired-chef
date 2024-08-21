import { useState } from 'react';
import { FullRecipePopout } from '../FullRecipePopout/FullRecipePopout';

export const RecipeCard = ({ recipe, buttonPressed }) => {
  console.log("The button status is currently: ", buttonPressed)
  if ( buttonPressed === 0 ) {
    return
  }
  if (!recipe ) {
    return "We couldn't find a direct match sadly. But here are some suggestions!"
}
  console.log("BLAH BLAH BLAH LOOK: ",recipe)
  const [showPopout, setShowPopout] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion =()=> {
    setIsExpanded(!isExpanded);
  }
  const handleSeeMoreClick = () => {
    setShowPopout(true);
  };

  const handleClosePopout = () => {
    setShowPopout(false);
  };

  const replacements = recipe.suggestedReplacements

  return (
    <>
      <div className="recipe-card">
        <img className="image-placeholder" src={recipe.recipe.images.REGULAR.url}/>
        <div className="recipe-details">
          <h3>{recipe.recipe.label}</h3>
          {/* <p>{description}</p> */}
          <button onClick={handleSeeMoreClick}>See more</button>
          <a onClick={toggleExpansion}>
            {isExpanded ? "Hide Replacements" : "Show Replacements"}
          </a>
          {isExpanded && (
            <ul>
              {replacements.map((replacement,index)=> (
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
    </>
  );
};
