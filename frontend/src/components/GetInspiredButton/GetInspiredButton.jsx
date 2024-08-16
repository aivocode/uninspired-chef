import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RandomRecipe from "../Recipes/RandomRecipe.jsx";
import { getRandomRecipe } from "../../services/services.js";
import { RecipeCard } from "../RecipeCard/RecipeCard.jsx";
import { Knife } from "../Knife/Knife.jsx";
import { Tomato } from "../Tomato/Tomato.jsx";

export const GetInspiredButton = () => {
  const [recipe, setRecipe] = useState()
  // const [inspiredText, setInspiredText] = useState("")
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }


  //function to handle getting a random recipe
  const fetchGetRecipe = async () => {
    try {
      // calls function from services
        const data = await getRandomRecipe(token)
      //sets recipe to the data object returned
        setRecipe(data)
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
        <button className="inspire-button"
          onClick={() => {
            fetchGetRecipe();
            // changeText();
            }}> 
          Get Inspired
        </button>
            <RecipeCard recipe={recipe}/>
      </div>
    </>
  );
};

export default GetInspiredButton