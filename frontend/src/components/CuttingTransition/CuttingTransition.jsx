import { useState } from 'react';
import { Knife } from "../Knife/Knife";
import { Tomato } from "../Tomato/Tomato";

export const CuttingTransition = ({ className }) => {
  const [isCutting, setIsCutting] = useState(false);

  const handleCut = () => {
    setIsCutting(true);
    setTimeout(() => {
      document.getElementById("recipe-feed-container").scrollIntoView({ behavior: 'smooth' });
    }, 2000); // Adjust timing as needed
  };

  return (
    <div className={`relative w-[775px] h-[904px] ${className}`} onClick={handleCut}>
      <Tomato className={`${isCutting ? 'cutting-class' : ''}`} />
      {isCutting && (
        <>
          <Knife className="absolute left-[400px] top-[100px]" />
          <img
            className="absolute w-[58px] h-[42px] left-[459px] top-[122px]"
            alt="Knife Blade"
            src="https://c.animaapp.com/8aTehn18/img/subtract-11.svg"
          />
        </>
      )}
    </div>
  );
};
