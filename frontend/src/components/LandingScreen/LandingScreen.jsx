import { CuttingTransition } from "../CuttingTransition/CuttingTransition";
import { TextContentTitle } from "../TextContentTitle/TextContentTitle";
import {
  cuttingTransitionPolygon as defaultCuttingTransitionPolygon,
  cuttingTransitionEllipse as defaultCuttingTransitionEllipse,
  cuttingTransitionImg as defaultCuttingTransitionImg,
  cuttingTransitionSubtract as defaultCuttingTransitionSubtract,
  cuttingTransitionSubtract1 as defaultCuttingTransitionSubtract1,
  cuttingTransitionSubtract2 as defaultCuttingTransitionSubtract2,
  choppingBoard,
  knifeEllipse,
  knifeImg,
  knifePolygon,
  polygon_5_3,
  subtract_3,
  subtract_4,
  subtract_5
} from '../../assets/svg-assets';

export const LandingScreen = ({
  property1,
  className,
  cuttingTransitionPolygon = defaultCuttingTransitionPolygon,
  cuttingTransitionEllipse = defaultCuttingTransitionEllipse,
  cuttingTransitionImg = defaultCuttingTransitionImg,
  cuttingTransitionSubtract = defaultCuttingTransitionSubtract,
  cuttingTransitionSubtract1 = defaultCuttingTransitionSubtract1,
  cuttingTransitionSubtract2 = defaultCuttingTransitionSubtract2,
}) => {
  return (
    <div className={`w-full h-auto bg-[#feead1] ${className} flex flex-col items-center`}>
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        <TextContentTitle
          align="center"
          className="mt-16 mb-8"
          subtitle="That can change"
          title="Uninspired?"
        />
        <div className="flex justify-center items-center mb-8">
          <button className="px-6 py-3 bg-[#fd6f2f] text-white font-bold rounded-lg">
            Inspire Me!
          </button>
        </div>
        <img
          className="w-full max-w-3xl mt-8"
          alt="Chopping board"
          src={choppingBoard}
        />
        <CuttingTransition
          className="w-full max-w-3xl mt-8"
          ellipse={cuttingTransitionImg}
          ellipse1={property1 === "chopped" ? cuttingTransitionEllipse : undefined}
          img={cuttingTransitionEllipse}
          kniveEllipse={property1 === "chopped" ? knifeEllipse : undefined}
          kniveImg={property1 === "chopped" ? knifeImg : undefined}
          knivePolygon={property1 === "chopped" ? knifePolygon : undefined}
          polygon={cuttingTransitionPolygon}
          polygon1={property1 === "chopped" ? polygon_5_3 : undefined}
          property1={property1 === "chopped" ? "chopping" : "default"}
          subtract={cuttingTransitionSubtract1}
          subtract1={cuttingTransitionSubtract}
          subtract2={cuttingTransitionSubtract2}
          subtract3={property1 === "chopped" ? subtract_3 : undefined}
          subtract4={property1 === "chopped" ? subtract_4 : undefined}
          subtract5={property1 === "chopped" ? subtract_5 : undefined}
        />
      </div>
    </div>
  );
};
