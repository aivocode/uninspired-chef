import "./IngredientPopout.css";
import { useState } from "react";

export const EditIngredient = ({
  onClose,
  index,
  editIngredientsArrayItem,
  ingredientsArrayState,
}) => {
  // console.log(index);

  const [ingredientName, setIngredientName] = useState(
    ingredientsArrayState[index].ingredientName
  ); // we store ingredient name, with default one from parent component state
  const [ingredientQuantity, setIngredientQuantity] = useState(
    ingredientsArrayState[index].ingredientQuantity
  ); // we store ingredient quantity, with default one from parent component state

  const [ingredientNameValidatorMessage, setIngredientNameValidatorMessage] =
    useState(""); // we store Ingredient Name validator messages here if something goes wrong
  const [
    ingredientQuantityValidatorMessage,
    setIngredientQuantityValidatorMessage,
  ] = useState(""); // we store Ingredient Quantity validator messages here if something goes wrong

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ingredientName && ingredientQuantity) {
      editIngredientsArrayItem(
        {
          ingredientName: ingredientName,
          ingredientQuantity: ingredientQuantity,
        },
        index
      ); // if all checks passed, create object with ingredient name and it's quantity, and 2md parameter "index" to pass to Pantry.jsx so it knows at which index of ingredientsArrayState it's modifying
      onClose(); // Close the popout after adding the ingredient
    }
  };

  // input validation handling while user types for empty Ingredient Name value
  const handleChangeIngredientName = (event) => {
    if (event.target.value.length < 1) {
      setIngredientNameValidatorMessage(
        "Leaving Ingredient Name field empty will revert to old values."
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
        "Leaving Ingredient Quantity field empty will revert to old values."
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
            defaultValue={ingredientsArrayState[index].ingredientName}
            onChange={handleChangeIngredientName}
          />
          {ingredientNameValidatorMessage && (
            <div
              className="p-2 mb-1 text-sm text-yellow-800 rounded-lg bg-yellow-50"
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
            defaultValue={ingredientsArrayState[index].ingredientQuantity}
            min="1" // minimum is 1, so no zeroes or negatives are allowed
            max="99" // max allowed, when going over 999 can affect layout
            onChange={handleChangeIngredientQuantity}
          />
          {ingredientQuantityValidatorMessage && (
            <div
              className="p-2 mb-1 text-sm text-yellow-800 rounded-lg bg-yellow-50"
              role="alert"
            >
              {ingredientQuantityValidatorMessage}
            </div>
          )}
        </div>
      </form>
      <button className="add-button" type="submit" form="add-ingredient-form">
        Edit Ingredient
      </button>
    </div>
  );
};
