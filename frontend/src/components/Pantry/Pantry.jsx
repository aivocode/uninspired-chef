import { useState } from 'react';
import { AddIngredient } from '../AddIngredientPopout/AddIngredientPopout';
import '../../static/PantryPage.css';

export const Pantry = ({ className }) => {
  const [showPopout, setShowPopout] = useState(false);

  const handleAddButtonClick = () => {
    setShowPopout(true); // Show the popout when the "Add" button is clicked
  };

  const handleClosePopout = () => {
    setShowPopout(false); // Hide the popout when the user is done
  };

  return (
    <div className={`pantry-container ${className}`}>
      <div className="relative pantry-content">
        <div className="pantry-background" />
        <div className="pantry-header-bar" />
        <div className="pantry-content-box">
          <div className="pantry-content-inner">
            <img
              className="line line-top"
              alt="Line"
              src="https://c.animaapp.com/2O5FotJ7/img/line-2-1.svg"
            />
            <img
              className="line line-bottom"
              alt="Line"
              src="https://c.animaapp.com/2O5FotJ7/img/line-3-1.svg"
            />
            <div className="pantry-title">PANTRY</div>
            <p className="pantry-ingredients">
              &nbsp;&nbsp;Ingredient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Quantity
              <br />
              <br />
              <br />
              Tomatoes&nbsp;&nbsp;-----------------------&nbsp;&nbsp; 4<br />
              <br />
              <br />
              Spaghetti&nbsp;&nbsp;------------------------ 200g
              <br />
              <br />
              <br />
              Garlic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------------------------ 1 head
            </p>
            <div className="add-button-container">
              <button
                className="add-button"
                onClick={handleAddButtonClick}
              >
                <div className="add-button-text">
                  + ADD
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="white-box" />
        <div className="header-bar" />
      </div>

      {showPopout && (
        <div className="popout-overlay">
          <AddIngredient onClose={handleClosePopout} />
        </div>
      )}
    </div>
  );
};
