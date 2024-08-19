//import { Header } from "../../components/Header/Header"; //Sam's
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NutritionTable from "../../components/NutritionTable/NutritionTable";
import { getRecipeNutrition } from "../../services/recipesNutrition";
export const NutritionPage = () => {
  const [recipeNutrition, setRecipeNutrition] = useState();
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
      const data = await getRecipeNutrition(token);
      //sets recipe to the data object returned
      setRecipeNutrition(data.hits[0].recipe);
      console.log(data.hits[0].recipe);
      return data.hits[0].recipe;
    } catch (err) {
      console.log("Failed to get inspired! ");
      console.error("Failed to get inspired :( ", err);
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            fetchGetRecipe();
          }}
        >
          GET INSPIRED
        </button>
        <NutritionTable recipe={recipeNutrition} />
      </div>
    </>
  );
};
