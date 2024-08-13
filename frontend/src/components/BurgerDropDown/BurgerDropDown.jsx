import {
  subtract_6,
  subtract_10,
  union_3,
  union_4,
  ellipse_1_1,
  ellipse_1_2,
} from '../../assets/svg-assets';

export const BurgerDropDown = ({
  property1,
  className,
  union = union_3,
  overlapGroupClassName,
}) => {
  return (
    <div
      className={`w-[225px] ${property1 === "closed" ? "h-[180px]" : "h-[260px]"} ${
        property1 === "open" ? "relative" : ""
      } ${className}`}
    >
      <div
        className={`left-5 top-[19px] ${property1 === "open" ? "w-[189px]" : "w-48"} ${
          property1 === "open" ? "h-[136px]" : "h-[139px]"
        } ${property1 === "open" ? "absolute" : "relative"}`}
      >
        {property1 === "open" && (
          <img className="absolute w-[189px] h-[23px] top-[113px] left-0" alt="Union" src={union} />
        )}

        <div
          className={`left-[3px] bg-[#b51b1e] absolute ${property1 === "closed" ? "w-[186px]" : "w-[183px]"} ${
            property1 === "closed" ? "top-[60px]" : "top-[72px]"
          } ${property1 === "closed" ? "h-2" : "h-[9px]"}`}
        />
        <div
          className={`left-[3px] bg-[#638209] absolute ${property1 === "open" ? "w-[183px]" : "w-[186px]"} ${
            property1 === "open" ? "top-[89px]" : "top-[68px]"
          } ${property1 === "open" ? "h-[9px]" : "h-2"}`}
        />
        {property1 === "open" && (
          <div className="absolute w-[189px] h-[130px] top-0 left-0">
            <button
              className={`all-[unset] box-border flex items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] relative left-[13px] rounded-[var(--size-radius-200)] overflow-hidden`}
            >
              <div className="relative w-fit mt-[-6.85px] mb-[-4.85px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-default text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
                Saved Recipes
              </div>
            </button>
          </div>
        )}
      </div>
      <div className="absolute w-[189px] h-[35px] top-[158px] left-5 bg-[#a13c2a] rounded-[64px]">
        <div className="flex w-[162px] h-[35px] items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] relative left-[13px] rounded-[var(--size-radius-200)] overflow-hidden">
          <div className="relative w-fit mt-[-3.54px] mb-[-1.54px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-default text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
            My pantry
          </div>
        </div>
      </div>
    </div>
  );
};
