import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RandomRecipe from "../../components/Recipes/RandomRecipe.jsx";
import { getRandomRecipe } from "../../services/services.js";

export const FeedPage = () => {
  const [recipe, setRecipe] = useState()
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

  return (
    <>
      <div>
        <button 
          onClick={() => {
            fetchGetRecipe()
            }}> 
          GET INSPIRED
        </button>
            <RandomRecipe recipe={recipe}/>
      </div>
    </>
  );
};
