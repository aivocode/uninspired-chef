import { useState, useEffect } from "react";
import { AddIngredient } from "../AddIngredientPopout/AddIngredientPopout";
import { createPantry, getPantry, updatePantry } from "../../services/pantry";

export const Pantry = ({ className }) => {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjZhZThmNmFjYzNiNzc1NDJlYTc0ZDIxIiwiaWF0IjoxNzIyODk1OTcwfQ.QOeRf8AgdnpPEiD_51hF73W9WW2c87Z5v_ZVTo6riP8"
  );
  const token = localStorage.getItem("token");
  const userId = "66b50d1969615f1c46aa93ab";

  const [showPopout, setShowPopout] = useState(false);

  const [pantryRenderMode, setPantryRenderMode] = useState(""); // here we store render mode, 0 for create Pantry form, 1 for show Pantry contents, 2 for edit Pantry form
  const [ingredientsArrayState, setIngredientsArrayState] = useState([]); // we add ingredients from popup here, so it can be passed to display on Create Pantry mode, before passing to createPantry
  const [dataState, setDataState] = useState({}); // here we store data object that comes from backend response
  const [message, setMessage] = useState(""); // here we store message that comes from backend, so we can render it later in our conditional statements in return()

  // here we store our ingredients string, so validator can later check if it's format is correct
  // and display message if it is not
  // suggested format: "ingredient1, ingredient2, ingredient3"
  const [ingredientsString, setIngredientsString] = useState("");

  useEffect(() => {
    if (token) {
      fetchGetPantry(); // first time it renders, it does GET request do determine what mode to choose
    }
  }, []);

  const addToIngredientsArray = (ingredientString) => {
    setIngredientsArrayState([...ingredientsArrayState, ingredientString]); // we add new array item each time submit from popup
  };

  const fetchGetPantry = async () => {
    const data = await getPantry(userId);
    if (data.status === 400) {
      setPantryRenderMode(0); // first time we login, we have no Pantry, which will have status code 400, so render mode is set to 0
      setMessage(data.message);
    } else if ((data.status = 200)) {
      setPantryRenderMode(1); // When we already have Pantry, which will have status code 200, so render mode is set to 1
      setDataState(data);
      setIngredientsArrayState(data.ingredientsArray);
    }
  };

  const fetchCreatePantry = async () => {
    const data = await createPantry(token, userId, ingredientsArrayState);
    setPantryRenderMode(1);
    setMessage(data.message);
    setDataState(data); // instead of running fetchGetPantry() GET request again, we can instead use data returned by POST request
  };

  const deleteDataStateIngredientsArrayItem = (index) => {
    setIngredientsArrayState((ingredientsArrayState) => {
      return ingredientsArrayState.filter((_, i) => i !== index); // delete element in useState based on on index, so elements can re-render
    });
  };

  const handleAddButtonClick = () => {
    setShowPopout(true); // Show the popout when the "Add" button is clicked
  };

  const handleClosePopout = () => {
    setShowPopout(false); // Hide the popout when the user is done
  };

  // console.log(pantryRenderMode);
  // console.log(ingredientsArrayState);
  // console.log(dataState);
  // console.log(message);

  return (
    <div className={`pantry-container ${className}`}>
      <div className="relative pantry-content">
        <div className="pantry-background" />
        <div className="pantry-header-bar" />
        <div className="pantry-content-box p-10">
          {/* if logged in and render mode is set to create Pantry mode 0, render these elements */}
          {token && pantryRenderMode === 0 && (
            <>
              <div className="pantry-title flex flex-col text-center mb-10">
                CREATE PANTRY
              </div>

              <div className="flex flex-col">
                <div>
                  {/* shows message if it exists */}
                  {message && <div className="mb-2 text-center">{message}</div>}
                </div>

                <div className="container m-auto grid grid-cols-6">
                  {ingredientsArrayState.map((element, index) => (
                    <div className="flex justify-center mb-2 gap-2" key={index}>
                      <div className="flex items-end badge-ingredient">
                        <div>{element}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="container m-auto">
                  <div className="flex gap-2">
                    <button
                      className="pantry-button"
                      onClick={handleAddButtonClick}
                    >
                      +ADD
                    </button>

                    {/* render button only there some ingredients added to ingredientsArray */}
                    {ingredientsArrayState.length > 0 && (
                      <button
                        className="pantry-button"
                        onClick={fetchCreatePantry}
                      >
                        CREATE
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* if logged in and render mode is set to view Pantry mode 1, render these elements */}
          {token && pantryRenderMode === 1 && (
            <>
              <div className="pantry-title flex flex-col text-center mb-10">
                PANTRY
              </div>

              <div className="flex flex-col">
                <div>
                  {/* shows message if it exists */}
                  {message && <div className="mb-2 text-center">{message}</div>}
                </div>

                <div className="container m-auto grid grid-cols-3">
                  {ingredientsArrayState.map((element, index) => (
                    <div className="flex justify-start mb-2 gap-2 " key={index}>
                      <button
                        type="button"
                        className="pt-1 pb-1"
                        onClick={() =>
                          deleteDataStateIngredientsArrayItem(index)
                        }
                      >
                        ✖️
                      </button>

                      <button
                        type="button"
                        className="pt-1 pb-1"
                        onClick={handleAddButtonClick}
                      >
                        &#9998;
                      </button>

                      <div className="flex gap-1 badge-ingredient">
                        <img
                          src={element.image}
                          className="avatar-ingredient"
                        />
                        <div>{element.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="container m-auto">
                  <div className="flex">
                    <button className="pantry-button">UPDATE</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {/* <div className="white-box" /> */}
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
