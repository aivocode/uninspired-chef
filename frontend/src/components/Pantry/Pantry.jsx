import { useState, useEffect } from "react";
import { AddIngredient } from "../AddIngredientPopout/AddIngredientPopout";
import "../../static/PantryPage.css";
import { createPantry, getPantry, updatePantry } from "../../services/pantry";

export const Pantry = ({ className }) => {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjZhZThmNmFjYzNiNzc1NDJlYTc0ZDIxIiwiaWF0IjoxNzIyODk1OTcwfQ.QOeRf8AgdnpPEiD_51hF73W9WW2c87Z5v_ZVTo6riP8"
  );
  const token = localStorage.getItem("token");
  const userId = "66b50d1969615f1c46aa93ab";

  const [showPopout, setShowPopout] = useState(false);

  // we add ingredients from popup here, so it can be passed to display on page before passing to createPantry
  const [ingredientsArray, setIngredientsArray] = useState([]);
  // here we store pantryId that can be reused between renders
  const [pantryId, setPantryId] = useState("");
  // here we store all our Pantry objects within array, so we can render them in return()
  const [pantryObjectsArray, setPantryObjectsArray] = useState([]);
  // here we store render mode, 0 for create Pantry form, 1 for show Pantry contents, 2 for edit Pantry form
  const [pantryRenderMode, setPantryRenderMode] = useState("");
  // here we store message that comes from backend, so we can render it later in our conditional statements in return()
  const [message, setMessage] = useState("");

  // here we store our ingredients string, so validator can later check if it's format is correct
  // and display message if it is not
  // suggested format: "ingredient1, ingredient2, ingredient3"
  const [ingredientsString, setIngredientsString] = useState("");

  useEffect(() => {
    if (token) {
      fetchGetPantry();
    }
  }, []);

  console.log(pantryRenderMode);
  const addToIngredientsArray = (ingredientString) => {
    setIngredientsArray([...ingredientsArray, ingredientString]);
  };
  // console.log(ingredientsArray);

  const fetchGetPantry = async () => {
    const data = await getPantry(userId);
    console.log(data);
    if (data.status === 400) {
      // first time we login, we have no Pantry, which will have status code 400, so render mode is set to 0
      setPantryRenderMode(0);
      setMessage(data.message);
    } else if ((data.status = 200)) {
      setPantryId(data.pantryId);
      setPantryObjectsArray(data.ingredientsArray);
      setPantryRenderMode(1);
    }
  };

  const fetchCreatePantry = async () => {
    const data = await createPantry(token, userId, ingredientsArray);
    fetchGetPantry();
    setMessage(data.message);
  };

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

            {/* if logged in and render mode is set to create Pantry mode 0, render these elements */}
            {token && pantryRenderMode === 0 && (
              <>
                <div className="pantry-title">CREATE PANTRY</div>
                <div className="pantry-ingredients">
                  {/* shows message if it exists */}
                  {message && (
                    <>
                      <div>{message}</div>
                      <br />
                    </>
                  )}

                  <div>Ingredients:</div>
                  <br />
                  {ingredientsArray.map((element, index) => (
                    <div key={index}>
                      <div>{element}</div>
                    </div>
                  ))}
                  <br />
                  {/* render button only there some ingredients added to ingredientsArray */}
                  {ingredientsArray.length > 0 && (
                    <button className="add-button" onClick={fetchCreatePantry}>
                      <div className="add-button-text">🧺CREATE</div>
                    </button>
                  )}
                </div>

                <div className="add-button-container">
                  <button className="add-button" onClick={handleAddButtonClick}>
                    <div className="add-button-text">🍅ADD</div>
                  </button>
                </div>
              </>
            )}

            {/* if logged in and render mode is set to view Pantry mode 1, render these elements */}
            {token && pantryRenderMode === 1 && (
              <>
                <div className="pantry-title">PANTRY</div>
                <div className="pantry-ingredients">
                  <div>
                    {/* shows message if it exists */}
                    {message && <div>{message}</div>}
                  </div>
                  <br />
                  {pantryObjectsArray.map((element, index) => (
                    <div key={index}>
                      <div>{element.label}</div>
                    </div>
                  ))}
                  <br />
                </div>

                <div className="add-button-container">
                  <button className="add-button" onClick={handleAddButtonClick}>
                    <div className="add-button-text">✏️EDIT</div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="white-box" />
        <div className="header-bar" />
      </div>

      {showPopout && (
        <div className="popout-overlay">
          <AddIngredient
            onClose={handleClosePopout}
            addToIngredientsArray={addToIngredientsArray}
          />
        </div>
      )}
    </div>
  );
};
