import { Header } from "../components/Header/Header";
import { LandingScreen } from "../components/LandingScreen/LandingScreen";
import { RecipeFeed } from "../components/RecipeFeed/RecipeFeed";
import '../static/HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <LandingScreen />
      <div id="recipe-feed-container">
        <RecipeFeed />
      </div>
    </div>
  );
};
