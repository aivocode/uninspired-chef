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
    <div className={`w-[var(--responsive-device-width)] h-[605px] bg-[#feead1] ${className}`}>
      <div className="top-[-324px] h-[929px] relative">
        <TextContentTitle
          align="center"
          className="!absolute !left-[398px] !top-[427px]"
          subtitle="That can change"
          title="Uninspired?"
        />
        <div className="w-60 flex left-[480px] items-center top-[591px] gap-[var(--size-space-400)] absolute">
          <button className="all-[unset] box-border border border-solid border-color-border-neutral-secondary flex items-center grow gap-[var(--size-space-200)] flex-1 pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] overflow-hidden rounded-[var(--size-radius-200)] justify-center bg-[#fd6f2f] relative">
            <div className="font-single-line-body-base w-fit mt-[-1.00px] tracking-[var(--single-line-body-base-letter-spacing)] text-[length:var(--single-line-body-base-font-size)] [font-style:var(--single-line-body-base-font-style)] text-color-text-default-default font-[number:var(--single-line-body-base-font-weight)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap relative">
              Inspire Me!
            </div>
          </button>
        </div>
        <img
          className="w-[1200px] left-0 top-[766px] h-[163px] absolute"
          alt="Chopping board"
          src={choppingBoard}
        />
        <CuttingTransition
          className="!absolute !left-14 !top-0"
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
