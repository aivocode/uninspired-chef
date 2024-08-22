import './FullRecipePopout.css';

export const FullRecipePopout = ({ recipe, onClose }) => {
  const recipeData = recipe.recipe;

  return (
    <div className="full-recipe-popout-overlay">
      <div className="full-recipe-popout">
        <div className="top-buttons">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        {/* <div className="full-recipe-image"></div> */}
        <img className="full-recipe-image" src={recipe.recipe.images.REGULAR.url}/>
        <div className="full-recipe-content">
          <div className="recipe-header">
            <div className="recipe-title">{recipe.recipe.label}</div>
          </div>
          <p className="recipe-description">tags: {recipe.recipe.tags}</p>
            <ul>
              {recipe.recipe.ingredientLines.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          <p className="recipe-instructions">
          {recipeData.instructions ? (
              recipeData.instructions
            ) : (
              <>
            Oh no! We don't have how to prepare it on record. <br /> <br /> 
            <a href={recipe.recipe.url}>Find full recipe here</a>
              </>
            )}
          </p>
          <div className="recipe-serves">
            <strong>Serves:</strong> {recipe.recipe.yield} people
          </div>
        </div>
        <button className="cooking-button">I’m cooking it</button>
      </div>
    </div>
  );
};
