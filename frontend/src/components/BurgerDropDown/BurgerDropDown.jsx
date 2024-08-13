import { useState } from 'react';
import './BurgerDropDown.css';

export const BurgerDropDown = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevents event bubbling if necessary
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`burger-dropdown w-[225px] ${isOpen ? "h-[260px]" : "h-[180px]"} ${className}`}
      onClick={toggleDropdown}
    >
      <div
        className={`burger-content left-5 top-[19px] ${isOpen ? "w-[189px] h-[136px] absolute" : "w-48 h-[139px] relative"}`}
      >
        {isOpen && (
          <img
            className="absolute w-[189px] h-[23px] top-[113px] left-0"
            alt="Union"
            src="https://c.animaapp.com/SwMh7ZZE/img/union-2.svg"
          />
        )}

        <div
          className={`burger-layer left-[3px] bg-[#b51b1e] absolute ${isOpen ? "w-[183px] top-[72px] h-[9px]" : "w-[186px] top-[60px] h-2"}`}
        />
        <div
          className={`burger-layer left-[3px] bg-[#638209] absolute ${isOpen ? "w-[183px] top-[89px] h-[9px]" : "w-[186px] top-[68px] h-2"}`}
        />
        {isOpen && (
          <div className="burger-ellipse absolute w-[189px] h-[130px] top-0 left-0">
            <button className="burger-button all-[unset] box-border relative w-[186px] h-[65px] left-px bg-[url(https://c.animaapp.com/SwMh7ZZE/img/ellipse-1-2.svg)] bg-[100%_100%]">
              <div className="inner-button all-[unset] box-border flex w-[111px] h-[52px] items-center justify-center gap-2 p-3 relative top-[13px] left-[38px] rounded-lg overflow-hidden">
                <div className="button-text relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                  Logout
                </div>
              </div>
            </button>
          </div>
        )}

        {!isOpen && (
          <>
            <div className="absolute w-48 h-[26px] top-[113px] left-0 bg-[url(https://c.animaapp.com/SwMh7ZZE/img/subtract-3.svg)] bg-[100%_100%]" />
            <div className="absolute w-48 h-8 top-[81px] left-0 bg-[#a13c2a] rounded-[64px]" />
            <div className="absolute w-48 h-[120px] top-0 left-0">
              <img
                className="absolute w-[189px] h-[60px] top-0 left-px"
                alt="Ellipse"
                src="https://c.animaapp.com/SwMh7ZZE/img/ellipse-1-3.svg"
              />
            </div>
            <img
              className="absolute w-48 h-[21px] top-[76px] left-0"
              alt="Union"
              src="https://c.animaapp.com/SwMh7ZZE/img/union-3.svg"
            />
          </>
        )}
      </div>
      {isOpen && (
        <>
          <div className="absolute w-[189px] h-7 top-[216px] left-5 bg-[url(https://c.animaapp.com/SwMh7ZZE/img/subtract-2.svg)] bg-[100%_100%]">
            <div className="flex w-[162px] h-7 items-center justify-center gap-2 p-3 relative left-[13px] rounded-lg overflow-hidden">
              <div className="button-text relative w-fit mt-[-6.85px] mb-[-4.85px] [font-family:'Inter',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                Saved Recipes
              </div>
            </div>
          </div>
          <div className="absolute w-[189px] h-[35px] top-[158px] left-5 bg-[#a13c2a] rounded-[64px]">
            <div className="flex w-[162px] h-[35px] items-center justify-center gap-2 p-3 relative left-[13px] rounded-lg overflow-hidden">
              <div className="button-text relative w-fit mt-[-3.54px] mb-[-1.54px] [font-family:'Inter',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                My pantry
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
