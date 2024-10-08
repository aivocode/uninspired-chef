import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomRecipe } from "../../services/services.js";
import { RecipeCard } from "../RecipeCard/RecipeCard.jsx";
import ClipLoader from "react-spinners/ClipLoader";

export const GetInspiredButton = ({ setSuggestionsData, setDisplaySavedRecipes }) => {
  const [recipe, setRecipe] = useState()
  const [buttonPressed, setButtonPressed] = useState(0)
  const [loading, setLoading] = useState(false)
  // const [inspiredText, setInspiredText] = useState("")
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }

  const toggleButton = () =>{
    setButtonPressed(1)
  }

  //function to handle getting a random recipe
  const fetchGetRecipe = async () => {
    setLoading(true)
    try {
      // calls function from services
      console.log('get a recipe...')
        const data = await getRandomRecipe(token)
      console.log('got a recipe...')
      //sets recipe to the data object returned
        setRecipe(data.hit)
        setSuggestionsData(data.suggestions);
        setDisplaySavedRecipes(false);
        return data

    } catch (err) {
        console.log('Failed to get inspired! ')
        console.error('Failed to get inspired :( ', err)
    } finally{
      setLoading(false)
    }
    ;
  }

  //shareAs={recipe.recipe.recipe.recipe.shareAs}

  return (
    <>
      <div className="inspire-container">
        {/* Conditionally render the spinner or the RecipeCard */}
        {loading ? (
          <ClipLoader color={"#123abc"} loading={loading} size={50} />
        ) : (
          <RecipeCard recipe={recipe} buttonPressed={buttonPressed} />
        )}
        {!loading && (
        <div className="button-wrapper">
        <button className="inspire-button mt-10 "
          onClick={() => {
            fetchGetRecipe();
            toggleButton();
            }}> {buttonPressed ? "Inspire me again" : "Get Inspired "}
        </button>
        </div>
          )}
        <br/>
      </div>
    </>
  );
};

export default GetInspiredButton