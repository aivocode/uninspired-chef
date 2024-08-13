import { Header } from "../components/Header/Header";
import { LandingScreen } from "../components//LandingScreen/LandingScreen";
import { RecipeFeed } from "../components/RecipeFeed/RecipeFeed";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-[var(--responsive-device-width)] items-start relative bg-color-background-default-default">
      <Header
        className="!self-stretch !h-[292px] ![border-right-style:none] ![border-top-style:none] ![border-left-style:none] !w-full"
        ellipse="ellipse-1-2.svg"
        img="subtract-12.svg"
        line="line-1-2.svg"
        property1="home-page"
        settingBottomBunClassName="bg-[url(/subtract-10.svg)]"
        subtract="subtract-11.svg"
        subtract1="subtract-13.svg"
        union="union-5.svg"
        union1="union-6.svg"
        union2="union-4.svg"
      />
      <LandingScreen
        choppingBoard="chopping-board-2.svg"
        className="!h-[725px] !relative"
        cuttingTransitionEllipse="ellipse-7-3.svg"
        cuttingTransitionEllipse1="ellipse-8-3.svg"
        cuttingTransitionImg="subtract-16.svg"
        cuttingTransitionPolygon="polygon-5-3.svg"
        cuttingTransitionSubtract="subtract-15.svg"
        cuttingTransitionSubtract1="subtract-14.svg"
        property1="default"
      />
      <RecipeFeed
        className="!h-[1415px]"
        recipeCardDivClassName="bg-[url(/recipe-card-2.png)]"
        recipeCardDivClassNameOverride="bg-[url(/recipe-image-4.svg)]"
        recipeCardPropertyDefaultClassName="bg-[url(/recipe-card.png)]"
        recipeCardPropertyDefaultClassNameOverride="bg-[url(/image.png)]"
        recipeCardRecipeImageClassName="bg-[url(/recipe-image-2.svg)]"
        recipeCardRecipeImageClassNameOverride="bg-[url(/recipe-image-3.svg)]"
      />
    </div>
  );
};