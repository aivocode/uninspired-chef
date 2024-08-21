import { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { LandingScreen } from "../components/LandingScreen/LandingScreen";
import { RecipeFeed } from "../components/RecipeFeed/RecipeFeed";
import { SavedRecipeFeed } from "../components/SavedRecipeFeed/SavedRecipeFeed";
import { getFavouriteRecipes } from "../services/services";
import '../static/HomePage.css';

export const HomePage = () => {
  const [suggestionsData, setSuggestionsData] = useState([]); // state for storing suggestions data (API)
  const [savedRecipes, setSavedRecipes] = useState([]); // state for storing saved recipes
  const [displaySavedRecipes, setDisplaySavedRecipes] = useState(false); // state to switch between suggestions feed (i.e. recipe feed) and saved recipe feed

  useEffect(() => {
      const fetchSavedRecipes = async () => {
        try {
          // obtain token from local storage
          const token = localStorage.getItem("token"); 
          if (token) {
            //fetch favouritedRecipes array
            const recipes = await getFavouriteRecipes(token);
            //function updates savedRecipes to user's favouriteRecipes array
            setSavedRecipes(recipes);
          }
        } catch (err) {
          console.error(err);
        }
      };
      fetchSavedRecipes();
    },[displaySavedRecipes, savedRecipes]); // hook dependencies - function will re-run when displaySavedRecipes state = true and savedRecipes changes

  return (
    <div className="homepage-container">
      <Header setDisplaySavedRecipes={setDisplaySavedRecipes} /> 
      <LandingScreen setSuggestionsData={setSuggestionsData} setDisplaySavedRecipes={setDisplaySavedRecipes}/>

      <div id="recipe-feed-container">
        {displaySavedRecipes ? (
          <SavedRecipeFeed savedRecipes={savedRecipes} />
        ) : (
          <RecipeFeed suggestionsData={suggestionsData}/>
        )}
      </div>
    </div>
  );
};
