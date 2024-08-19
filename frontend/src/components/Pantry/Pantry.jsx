import { useState, useEffect } from "react";
import { AddIngredient } from "../IngredientPopout/AddIngredientPopout";
import { EditIngredient } from "../IngredientPopout/EditIngredientPopout";
import { createPantry, getPantry, updatePantry } from "../../services/pantry";
import { jwtDecode } from "jwt-decode";

export const Pantry = ({ className }) => {
  const [showPopout, setShowPopout] = useState(false);
  const [showEditPopout, setShowEditPopout] = useState(false); // this state is responsible for displaying edit popout

  const [pantryRenderMode, setPantryRenderMode] = useState(""); // here we store render mode, 0 for create Pantry, 1 for show Pantry contents, 2 for edit Pantry
  const [ingredientsArrayState, setIngredientsArrayState] = useState([]); // we add ingredients and quantity objects from popup here, so they can display in Create/Update Pantry mode, before clicking CREATE/UPDATE
  const [dataState, setDataState] = useState({}); // here we store data object that comes from backend response
  const [message, setMessage] = useState(""); // here we store message that comes from backend, so we can render it later in our conditional statements in return()
  const [arrayIndex, setArrayIndex] = useState(null); // he we store index of element from where we clicked Edit button, so popout knows which item in ingredientsArrayState it is editing
  const [pantryId, setPantryId] = useState(null); // we store pantryId here

  const token = localStorage.getItem("token");
  let userId = "";
  if (token) {
    userId = jwtDecode(token).user_id; // get user_id from token so it can be passed as paramaters
  }

  useEffect(() => {
    if (token) {
      fetchGetPantry(); // first time it renders, it does GET request do determine what mode to choose
    }
  }, []);

  const addToIngredientsArray = (ingredientObject) => {
    setIngredientsArrayState([...ingredientsArrayState, ingredientObject]); // we add new array item (object that has name and quantity) each time submit from popup
  };

  const deleteDataStateIngredientsArrayItem = (index) => {
    setIngredientsArrayState((ingredientsArrayState) => {
      return ingredientsArrayState.filter((_, i) => i !== index); // delete element in useState based on on index, so elements can re-render
    });
  };

  const editIngredientsArrayItem = (ingredientObject, index) => {
    setIngredientsArrayState((values) =>
      values.map((value, i) => (i === index ? ingredientObject : value))
    ); // map  previous state to the next state, using the index to match by, when the index matches return the new value, otherwise return the current value.
  };

  const translateObjects = (data) => {
    const arrayOfPantryObjects = data.ingredientsArray.map(
      ({ label, ingredientQuantity }) => ({
        label,
        ingredientQuantity,
      })
    ); // create new array of Pantry objects so it can be passed to setIngredientsArrayState matching same data structure as in create Pantry mode
    // console.log(arrayOfPantryObjects);

    const arrayOfPantryObjectsWithRenamedKeys = arrayOfPantryObjects.map(
      ({ label: ingredientName, ingredientQuantity }) => ({
        ingredientName,
        ingredientQuantity,
      })
    ); // rename key "label" to key "ingredientName" in each object in array
    // console.log(arrayOfPantryObjectsWithRenamedKeys);

    setIngredientsArrayState(arrayOfPantryObjectsWithRenamedKeys);
  };

  const fetchGetPantry = async () => {
    const data = await getPantry(userId);
    if (data.status === 400) {
      setPantryRenderMode(0); // first time we login, we have no Pantry, which will have status code 400, so render mode is set to 0
      setDataState(data);
      setMessage(data.message); // set info message so it displays when no Pantry was found
    } else if ((data.status = 200)) {
      setDataState(data); // set data state so it can keep response from db
      setPantryId(data.pantryId);
      setPantryRenderMode(1); // When we already have Pantry, which will have status code 200, so render mode is set to 1
      translateObjects(data);
    }
  };

  const fetchCreatePantry = async () => {
    const data = await createPantry(token, userId, ingredientsArrayState);
    if (data.status === 404) {
      setDataState(data);
      setMessage(data.message); // set info message so it displays when no Pantry was created
      // setIngredientsArrayState([]); // optional: make all entered ingredients dissapear
    } else if (data.status === 200) {
      setPantryRenderMode(1);
      setDataState(data); // instead of running fetchGetPantry() GET request again, we can instead use data returned by POST request
      setPantryId(data.pantryId);
      setMessage(data.message); // set info message so it displays that Pantry was created
      translateObjects(data);
    }
  };

  const fetchUpdatePantry = async () => {
    const data = await updatePantry(token, pantryId, ingredientsArrayState);
    if (data.status === 404) {
      setDataState(data);
      setMessage(data.message); // set info message so it displays when no Pantry was updated
      // setIngredientsArrayState([]); // optional: make all entered ingredients dissapear
    } else if (data.status === 201) {
      setPantryRenderMode(1);
      setDataState(data); // instead of running fetchGetPantry() GET request again, we can instead use data returned by PUT request
      setPantryId(data.pantryId);
      setMessage(data.message); // set info message so it displays that Pantry was updated
      translateObjects(data);
    }
  };

  const handleAddButtonClick = () => {
    setShowPopout(true); // Show the popout when the "Add" button is clicked
  };
  const handleClosePopout = () => {
    setShowPopout(false); // Hide the popout when the user is done
  };

  const handleEditButtonClick = (index) => {
    setArrayIndex(index); // popout will render knowing which element it's editing
    setShowEditPopout(true); // open popout when user clicks edit button (pencil icon)
  };
  const handleCloseEditPopout = () => {
    setShowEditPopout(false); // close popout when user submitted edit form
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
          {/* if logged out display warning message */}
          {!token && (
            <div
              className="p-4 mb-1 text-sm text-yellow-800 rounded-lg bg-yellow-50"
              role="alert"
            >
              You are not logged in. Please login.
            </div>
          )}

          {/* if logged in and render mode is set to create Pantry mode 0, render these elements */}
          {token && pantryRenderMode === 0 && (
            <>
              <div className="pantry-title flex flex-col text-center mb-10">
                CREATE PANTRY
              </div>

              <div className="flex flex-col">
                <div>
                  {/* shows message in blue if GET request responded with 400 */}
                  {dataState.status === 400 && message && (
                    <div
                      className="p-4 mb-6 text-sm text-blue-800 rounded-lg bg-blue-50"
                      role="alert"
                    >
                      {message}
                    </div>
                  )}

                  {/* shows message in red if POST request responded with 404 */}
                  {dataState.status === 404 && message && (
                    <div
                      className="p-4 mb-6 text-sm text-red-800 rounded-b-lg bg-red-50"
                      role="alert"
                    >
                      {message}
                    </div>
                  )}
                </div>

                <div className="container m-auto">
                  <div className="flex flex-wrap gap-6 justify-start">
                    {/* We automatically generate html elements from ingredientsArrayState */}
                    {ingredientsArrayState.map((element, index) => (
                      <div
                        className="flex flex-nowrap justify-start mb-2 gap-2"
                        key={index}
                      >
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
                          onClick={() => handleEditButtonClick(index)}
                        >
                          &#9998;
                        </button>

                        <div className="flex flex-nowrap">
                          <div className="bg-[#feead1] p-2 rounded-l">
                            <div>{element.ingredientName}</div>
                          </div>

                          <div className="p-2 rounded-r bg-[#ff7f50]">
                            {element.ingredientQuantity}
                          </div>
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

                      {/* render button only if there some ingredients added to ingredientsArray */}
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
                  {message && (
                    <div
                      className="p-4 mb-6 text-sm text-green-800 rounded-lg bg-green-50"
                      role="alert"
                    >
                      {message}
                    </div>
                  )}
                </div>

                <div className="container m-auto">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {/* We automatically generate html elements from dataState.ingredientsArray */}
                    {dataState.ingredientsArray.map((element, index) => (
                      <div className="mb-2" key={index}>
                        <div className="flex flex-nowrap">
                          <div className="flex flex-nowrap bg-[#feead1] p-2 rounded-l gap-1">
                            {/* if image exists: */}
                            {element.image && (
                              <img
                                className="w-4 h-4 rounded-full ring-2 ring-[#ff7f50]"
                                src={element.image}
                              />
                            )}
                            {/* if image doesn't exist use fallback src: */}
                            {!element.image && (
                              <img
                                className="w-4 h-4 rounded-full ring-2 ring-[#ff7f50]"
                                src="https://img.icons8.com/?size=100&id=35903&format=png&color=000000"
                              />
                            )}
                            <div>{element.label}</div>
                          </div>

                          <div className="p-2 rounded-r bg-[#ff7f50]">
                            {element.ingredientQuantity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="container m-auto">
                  <div className="flex flex-nowrap">
                    <button
                      className="pantry-button"
                      onClick={() => setPantryRenderMode(2)}
                    >
                      EDIT
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* if logged in and render mode is set to update Pantry mode 2, render these elements */}
          {token && pantryRenderMode === 2 && (
            <>
              <div className="pantry-title flex flex-col text-center mb-10">
                UPDATE PANTRY
              </div>

              <div className="flex flex-col">
                <div>
                  {/* shows message in red if PUT request responded with 404 */}
                  {dataState.status === 404 && message && (
                    <div
                      className="p-4 mb-6 text-sm text-red-800 rounded-b-lg bg-red-50"
                      role="alert"
                    >
                      {message}
                    </div>
                  )}
                </div>

                <div className="container m-auto">
                  <div className="flex flex-wrap gap-6 justify-start">
                    {/* We automatically generate html elements from ingredientsArrayState */}
                    {ingredientsArrayState.map((element, index) => (
                      <div
                        className="flex flex-nowrap justify-start mb-2 gap-2"
                        key={index}
                      >
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
                          onClick={() => handleEditButtonClick(index)}
                        >
                          &#9998;
                        </button>

                        <div className="flex flex-nowrap">
                          <div className="bg-[#feead1] p-2 rounded-l">
                            <div>{element.ingredientName}</div>
                          </div>

                          <div className="p-2 rounded-r bg-[#ff7f50]">
                            {element.ingredientQuantity}
                          </div>
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

                      {/* render button only if there some ingredients added to ingredientsArray */}
                      {ingredientsArrayState.length > 0 && (
                        <button
                          className="pantry-button"
                          onClick={fetchUpdatePantry}
                        >
                          UPDATE
                        </button>
                      )}

                      <button
                        className="pantry-button"
                        onClick={() => {
                          fetchGetPantry(); // we need to run GET requests so dataState changes to object required by render mode 1
                          setMessage(""); // reset message so it doesn't carry over from update Pantry mode, if wrong ingredient found in API
                        }}
                      >
                        BACK
                      </button>
                    </div>
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
            ingredientsArrayState={ingredientsArrayState} // we pass it so child so form in child component can validate for duplicates
            addToIngredientsArray={addToIngredientsArray} // we pass addToIngredientsArray to Add popout so it can pass parameters from there
          />
        </div>
      )}

      {showEditPopout && (
        <div className="popout-overlay">
          <EditIngredient
            index={arrayIndex} // we pass index of element where edit button was clicked to Edit popout, which is child component
            ingredientsArrayState={ingredientsArrayState} // we pass it so child so form in child component can get default values from it to appear during editing, and validate for duplicates
            onClose={handleCloseEditPopout}
            editIngredientsArrayItem={editIngredientsArrayItem} //  we pass editIngredientsArrayItem to edit popout so it can pass parameters from there
          />
        </div>
      )}
    </div>
  );
};

// qwerty1!
