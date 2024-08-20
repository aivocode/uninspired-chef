import "./IngredientPopout.css";
import { useState } from "react";

export const AddIngredient = ({ onClose, addToIngredientsArray, ingredientsArrayState }) => {
  const [ingredientName, setIngredientName] = useState(""); // we store ingredient name
  const [ingredientQuantity, setIngredientQuantity] = useState(""); // we store ingredient quantity

  const [ingredientNameValidatorMessage, setIngredientNameValidatorMessage] =
    useState(""); // we store Ingredient Name validator messages here if something goes wrong
  const [
    ingredientQuantityValidatorMessage,
    setIngredientQuantityValidatorMessage,
  ] = useState(""); // we store Ingredient Quantity validator messages here if something goes wrong

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(ingredientsArrayState);
    // console.log(ingredientName);

    let duplicate = false;
    if (ingredientsArrayState) {
      for (let i = 0; i < ingredientsArrayState.length; i++) {
        if (
          ingredientsArrayState[i].ingredientName.toLowerCase() ===
          ingredientName.toLowerCase()
        ) {
          duplicate = true;
        }
      }
    } // loops through ingredientsArrayState to find duplicate and set duplicate to true if found

    // console.log(duplicate);

    if (!ingredientName) {
      setIngredientNameValidatorMessage(
        "Ingredient Name field cannot be empty."
      ); // informs user why it was not submitted
    }

    if (!ingredientQuantity) {
      setIngredientQuantityValidatorMessage(
        "Ingredient Quantity field cannot be empty."
      ); // informs user why it was not submitted
    }

    if (duplicate) {
      setIngredientNameValidatorMessage(
        `Duplicate ingredient found: ${ingredientName}`
      );
    }

    if (ingredientName && ingredientQuantity && !duplicate) {
      addToIngredientsArray({
        ingredientName: ingredientName,
        ingredientQuantity: ingredientQuantity,
      }); // if all checks passed, create object with ingredient name and it's quantity to pass to Pantry.jsx
      onClose(); // Close the popout after adding the ingredient
    }
  };

  // input validation handling while user types for empty Ingredient Name value
  const handleChangeIngredientName = (event) => {
    if (!event.target.value) {
      setIngredientName("");
    }

    if (event.target.value.length < 1) {
      setIngredientNameValidatorMessage(
        "Ingredient Name field cannot be empty."
      );
    } else if (event.target.value.length > 0) {
      setIngredientNameValidatorMessage("");
      setIngredientName(event.target.value);
    }
  };

  // input validation handling while user types for empty Ingredient Quantity value
  const handleChangeIngredientQuantity = (event) => {
    if (event.target.value < 1) {
      setIngredientQuantityValidatorMessage(
        "Ingredient Quantity field cannot be empty."
      );
    } else if (event.target.value.length > 0) {
      setIngredientQuantityValidatorMessage("");
      setIngredientQuantity(event.target.value);
    }
  };

  return (
    <div className="ingredient-popout">
      <button className="close-button" onClick={onClose}>
        ✖️
      </button>

      <form id="add-ingredient-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label">Ingredient Name</label>
          <input
            type="text"
            name="ingredientName"
            className="input"
            placeholder="tomato"
            onChange={handleChangeIngredientName}
          />
          {ingredientNameValidatorMessage && (
            <div
              className="p-2 mb-1 text-sm text-red-800 rounded-b-lg bg-red-50"
              role="alert"
            >
              {ingredientNameValidatorMessage}
            </div>
          )}
        </div>

        <div className="input-group">
          <label className="label">Ingredient Quantity</label>
          <input
            type="number"
            name="ingredienQuantity"
            className="input"
            placeholder="1"
            min="1" // minimum is 1, so no zeroes or negatives are allowed
            max="99" // max allowed, when going over 999 can affect layout
            onChange={handleChangeIngredientQuantity}
          />
          {ingredientQuantityValidatorMessage && (
            <div
              className="p-2 mb-1 text-sm text-red-800 rounded-b-lg bg-red-50"
              role="alert"
            >
              {ingredientQuantityValidatorMessage}
            </div>
          )}
        </div>
      </form>
      <button className="add-button" type="submit" form="add-ingredient-form">
        Add Ingredient
      </button>
    </div>
  );
};
