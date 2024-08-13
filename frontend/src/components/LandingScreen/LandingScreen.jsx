import { CuttingTransition } from "../CuttingTransition/CuttingTransition";
import { TextContentTitle } from "../TextContentTitle/TextContentTitle";

export const LandingScreen = ({
  property1,
  className,
}) => {
  return (
    <div className={`w-[var(--responsive-device-width)] h-[605px] bg-[#feead1] ${className}`}>
      <div className="top-[-324px] h-[929px] relative">
        <TextContentTitle/>
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
          src="https://c.animaapp.com/XNVGwrYa/img/chopping-board-2.svg"
        />
        <CuttingTransition/>
      </div>
    </div>
  );
};
