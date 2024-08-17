import "./IngredientPopout.css";
import { useState } from "react";

export const EditIngredient = ({ onClose, addToIngredientsArray }) => {
  const [ingredientString, setIngredientString] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addToIngredientsArray(ingredientString);
    onClose(); // Close the popout after adding the ingredient
  };

  const handleChange = (event) => {
    setIngredientString(event.target.value);
  };

  return (
    <div className="ingredient-popout">
      <button className="close-button" onClick={onClose}>
        ✖️
      </button>
      <form id="edit-ingredient-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label">Ingredient Name</label>
          <input
            type="text"
            className="input"
            placeholder="tomato"
            onChange={handleChange}
          />
        </div>
      </form>
      {/* <div className="input-group">
        <label className="label">Ingredient Quantity</label>
        <input type="text" className="input" placeholder="4" />
      </div> */}
      <button className="add-button" type="submit" form="edit-ingredient-form">
        Edit Ingredient
      </button>
    </div>
  );
};
