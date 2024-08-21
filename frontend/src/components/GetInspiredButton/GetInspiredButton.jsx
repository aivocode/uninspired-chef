import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RandomRecipe from "../Recipes/RandomRecipe.jsx";
import { getRandomRecipe } from "../../services/services.js";
import { RecipeCard } from "../RecipeCard/RecipeCard.jsx";
import { Knife } from "../Knife/Knife.jsx";
import { Tomato } from "../Tomato/Tomato.jsx";

export const GetInspiredButton = ({ setSuggestionsData }) => {
  const [recipe, setRecipe] = useState()
  const [buttonPressed, setButtonPressed] = useState(0)
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
    try {
      // calls function from services
        const data = await getRandomRecipe(token)
      //sets recipe to the data object returned
        setRecipe(data.hit)
        setSuggestionsData(data.suggestions);
        return data

    } catch (err) {
        console.log('Failed to get inspired! ')
        console.error('Failed to get inspired :( ', err)
    };
  }

  // const changeText =() => {
  //   if (setInspiredText = "") {
  //     setInspiredText("GET INSPIRED")
  //   } else {
  //   setInspiredText("More inspiration...")
  //   }
  // }


  return (
    <>
      <div>
        <RecipeCard recipe={recipe} buttonPressed={buttonPressed}/>
        <button className="inspire-button"
          onClick={() => {
            fetchGetRecipe();
            toggleButton();
            }}> {buttonPressed ? "Inspire me again" : "Get Inspired "}

        </button>
        <br/>
      </div>
    </>
  );
};

export default GetInspiredButton