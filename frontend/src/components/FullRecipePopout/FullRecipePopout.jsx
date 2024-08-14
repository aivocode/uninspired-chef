import './FullRecipePopout.css';

export const FullRecipePopout = ({ onClose }) => {
  return (
    <div className="full-recipe-popout-overlay">
      <div className="full-recipe-popout">
        <div className="full-recipe-image" />
        <div className="full-recipe-content">
          <div className="recipe-header">
            <div className="recipe-title">Recipe</div>
          </div>
          <p className="recipe-description">Short description of the recipe</p>
          <ul className="recipe-ingredients">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            <li>Ingredient 4</li>
          </ul>
          <p className="recipe-instructions">
            Instructions on how to prepare the dish
          </p>
          <div className="recipe-serves">
            <strong>Serves:</strong> 4 people
          </div>
          <button className="cooking-button">I’m cooking it</button>
        </div>
        <div className="top-buttons">
          <img
            className="save-recipe-button"
            alt="Save recipe button"
            src="save-recipe-button.svg"
          />
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};
