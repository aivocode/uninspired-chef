import { Header } from "../components/Header/Header";
import { LandingScreen } from "../components/LandingScreen/LandingScreen";
import { RecipeFeed } from "../components/RecipeFeed/RecipeFeed";
import {
  ellipse_1_2,
  subtract_12,
  line_1_2,
  subtract_10,
  subtract_11,
  subtract_13,
  union_5,
  union_6,
  union_4,
  choppingBoard,
  ellipse_7_3,
  ellipse_8_3,
  subtract_16,
  polygon_5_3,
  subtract_15,
  subtract_14,
} from '../assets/svg-assets';

export const HomePage = () => {
  return (
    <div className="flex flex-col w-[var(--responsive-device-width)] items-start relative bg-color-background-default-default">
      <Header
        className="!self-stretch !h-[292px] ![border-right-style:none] ![border-top-style:none] ![border-left-style:none] !w-full"
        ellipse={ellipse_1_2}
        img={subtract_12}
        line={line_1_2}
        property1="home-page"
        settingBottomBunClassName={`bg-[url(${subtract_10})]`}
        subtract={subtract_11}
        subtract1={subtract_13}
        union={union_5}
        union1={union_6}
        union2={union_4}
      />
      <LandingScreen
        choppingBoard={choppingBoard}
        className="!h-[725px] !relative"
        cuttingTransitionEllipse={ellipse_7_3}
        cuttingTransitionEllipse1={ellipse_8_3}
        cuttingTransitionImg={subtract_16}
        cuttingTransitionPolygon={polygon_5_3}
        cuttingTransitionSubtract={subtract_15}
        cuttingTransitionSubtract1={subtract_14}
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
