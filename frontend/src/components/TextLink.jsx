/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
// import React from "react";

export const TextLink = ({ text = "Text Link", className }) => {
  return (
    <div className={`inline-flex items-start relative ${className}`}>
      <div className="relative w-fit mt-[-1.00px] font-body-link font-[number:var(--body-link-font-weight)] text-color-text-default-default text-[length:var(--body-link-font-size)] tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] underline whitespace-nowrap [font-style:var(--body-link-font-style)]">
        {text}
      </div>
    </div>
  );
};

TextLink.propTypes = {
  text: PropTypes.string,
};
