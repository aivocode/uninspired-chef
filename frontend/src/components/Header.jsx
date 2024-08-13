/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
// import React from "react";

export const Header = ({
  property1,
  className,
  subtract = "/img/subtract-4.svg",
  img = "/img/subtract-6.svg",
  union = "/img/union-3.svg",
  union1 = "/img/union-4.svg",
  line = "/img/line-1-1.svg",
  settingBottomBunClassName,
  union2 = "/img/union-7.svg",
}) => {
  return (
    <div
      className={`[border-bottom-style:solid] border-color-border-default-default w-[1254px] gap-[var(--size-space-600)] h-[261px] border-b bg-[#feead1] relative ${className}`}
    >
      <div className="w-[169px] left-[39px] top-[29px] h-[169px] rounded-[48px] bg-[#feead1] absolute">
        <div className="w-[17px] left-[91px] top-[43px] h-[17px] absolute">
          <div className="w-[17px] left-0 top-0 h-[3px] bg-[#1e1919] absolute" />
          <div className="w-[17px] left-0 top-3.5 h-[3px] bg-[#1e1919] absolute" />
          <img className="w-[17px] left-0 top-0 h-4 absolute" alt="Subtract" src={subtract} />
        </div>
        <div className="w-[17px] left-28 top-[26px] h-[17px] absolute">
          <div className="w-[17px] left-0 top-0 h-[3px] bg-[#1e1919] absolute" />
          <div className="w-[17px] left-0 top-3.5 h-[3px] bg-[#1e1919] absolute" />
          <img className="w-[17px] left-0 top-0 h-4 absolute" alt="Subtract" src="/img/subtract-5.svg" />
        </div>
        <div className="w-[17px] left-[139px] top-5 h-[17px] absolute">
          <div className="w-[17px] left-0 top-0 h-[3px] bg-[#1e1919] absolute" />
          <div className="w-[17px] left-0 top-3.5 h-[3px] bg-[#1e1919] absolute" />
          <img className="w-[17px] left-0 top-0 h-4 absolute" alt="Subtract" src={img} />
        </div>
        <div className="w-[91px] left-[13px] top-[60px] h-[103px] absolute">
          <div className="border-[5px] border-solid border-[#6e6e6e] w-[50px] left-[21px] top-[25px] h-[55px] bg-white absolute" />
          <div className="border-[5px] border-solid border-[#6e6e6e] w-[11px] left-[15px] top-[29px] rotate-[-5.00deg] h-[52px] bg-white absolute" />
          <div className="border-[5px] border-solid border-[#6e6e6e] w-[11px] left-[65px] top-7 rotate-[5.00deg] h-[52px] bg-white absolute" />
          <img
            className="w-[91px] left-0 top-0 h-[39px] absolute"
            alt="Union"
            src={property1 === "pantry-page" ? union : "/img/union.svg"}
          />
          <img
            className="w-14 left-[17px] top-20 h-[23px] absolute"
            alt="Union"
            src={property1 === "pantry-page" ? union1 : "/img/union-1.svg"}
          />
          <img className="w-[5px] left-11 top-9 h-11 absolute" alt="Line" src={line} />
        </div>
      </div>
      <div className="w-[178px] flex left-[773px] items-center top-[113px] gap-[var(--size-space-300)] absolute">
        <div className="border border-solid border-color-border-neutral-secondary flex items-center grow gap-[var(--size-space-200)] flex-1 pt-[var(--size-space-200)] pr-[var(--size-space-200)] pb-[var(--size-space-200)] pl-[var(--size-space-200)] overflow-hidden rounded-[var(--size-radius-200)] justify-center bg-[#515839] relative">
          <div className="font-single-line-body-base w-fit mt-[-1.00px] tracking-[var(--single-line-body-base-letter-spacing)] text-[length:var(--single-line-body-base-font-size)] [font-style:var(--single-line-body-base-font-style)] text-[#feead1] font-[number:var(--single-line-body-base-font-weight)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap relative">
            {property1 === "home-page" && <>My Pantry</>}

            {property1 === "pantry-page" && <>Home</>}
          </div>
        </div>
      </div>
      <div className="w-[225px] left-[968px] top-6 h-[180px] absolute">
        <div className="w-48 left-5 top-[19px] h-[139px] relative">
          <div className="w-[186px] left-[3px] top-[60px] h-2 bg-[#b51b1e] absolute" />
          <div className="w-[186px] left-[3px] top-[68px] h-2 bg-[#638209] absolute" />
          <div
            className={`w-48 left-0 top-[113px] bg-[100%_100%] h-[26px] bg-[url(/static/img/subtract-7.svg)] absolute ${settingBottomBunClassName}`}
          />
          <div className="w-48 left-0 top-[81px] h-8 rounded-[64px] bg-[#a13c2a] absolute" />
          <div className="w-48 left-0 top-0 h-[120px] absolute">
            <img className="w-[189px] left-px top-0 h-[60px] absolute" alt="Ellipse" src="/img/ellipse-1-3.svg" />
          </div>
          <img className="w-48 left-0 top-[76px] h-[21px] absolute" alt="Union" src={union2} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  property1: PropTypes.oneOf(["home-page", "pantry-page"]),
  subtract: PropTypes.string,
  img: PropTypes.string,
  union: PropTypes.string,
  union1: PropTypes.string,
  line: PropTypes.string,
  union2: PropTypes.string,
};
