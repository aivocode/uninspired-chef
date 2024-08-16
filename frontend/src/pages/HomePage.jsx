import { useState } from "react";
import { Header } from "../components/Header/Header";
import { LandingScreen } from "../components/LandingScreen/LandingScreen";
import { RecipeFeed } from "../components/RecipeFeed/RecipeFeed";
import '../static/HomePage.css';
import GetInspiredButton from "../components/GetInspiredButton/GetInspiredButton";

export const HomePage = () => {
  const [ suggestionsData, setSuggestionsData] = useState([]);

  return (
    <div className="homepage-container">
      <Header />
      <LandingScreen setSuggestionsData={setSuggestionsData}/>

      <div id="recipe-feed-container">
        <RecipeFeed suggestionsData={suggestionsData}/>
      </div>
      
    </div>
  );
};
