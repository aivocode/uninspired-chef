import { Header } from "../components/Header/Header";
import { LandingScreen } from "../components/LandingScreen/LandingScreen";
import { RecipeFeed } from "../components/RecipeFeed/RecipeFeed";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-[var(--responsive-device-width)] items-start relative bg-color-background-default-default">
      <Header
      />
      <LandingScreen
      />
      <RecipeFeed
      />
    </div>
  );
};
