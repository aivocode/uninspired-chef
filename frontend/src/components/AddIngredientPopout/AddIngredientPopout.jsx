import './AddIngredientPopout.css';

export const AddIngredient = ({ onClose }) => {
  const handleAddClick = () => {
    // Handle adding the ingredient logic here
    onClose(); // Close the popout after adding the ingredient
  };

  return (
    <div className="add-ingredient-popout">
      <button className="close-button" onClick={onClose}>X</button>
      <div className="input-group">
        <label className="label">Ingredient Name</label>
        <input type="text" className="input" placeholder="Tomatoes" />
      </div>
      <div className="input-group">
        <label className="label">Ingredient Quantity</label>
        <input type="text" className="input" placeholder="4" />
      </div>
      <button className="add-button" onClick={handleAddClick}>
        Add Ingredient
      </button>
    </div>
  );
};
