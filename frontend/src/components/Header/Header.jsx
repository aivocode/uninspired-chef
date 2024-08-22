import './Header.css';
import { BurgerDropDown } from '../BurgerDropDown/BurgerDropDown';

export const Header = ({ setDisplaySavedRecipes, property1 = "default" }) => {


  return (
    <div className="relative w-[1254px] h-[280px] bg-[#feead1] border-b border-solid border-color-border-default-default gap-[var(--size-space-600)]">
      <div className="absolute w-[169px] h-[169px] top-[29px] left-[39px] bg-[#feead1] rounded-[48px]">
        <div className="absolute w-[91px] h-[103px] top-[60px] left-[13px]">
          <div className="absolute w-[50px] h-[55px] top-[25px] left-[21px] bg-white border-[5px] border-solid border-[#6e6e6e]" />
          <div className="absolute w-[11px] h-[52px] top-[29px] left-[15px] bg-white border-[5px] border-solid border-[#6e6e6e] rotate-[-5.00deg]" />
          <div className="absolute w-[11px] h-[52px] top-7 left-[65px] bg-white border-[5px] border-solid border-[#6e6e6e] rotate-[5.00deg]" />
          <img
            className="absolute w-[91px] h-[39px] top-0 left-0"
            alt="Union"
            src="https://c.animaapp.com/v7Kr4feg/img/union-5.svg"
          />
          <img
            className="absolute w-14 h-[23px] top-20 left-[17px]"
            alt="Union"
            src="https://c.animaapp.com/v7Kr4feg/img/union-6.svg"
          />
          <img
            className="absolute w-[5px] h-11 top-9 left-11"
            alt="Line"
            src="https://c.animaapp.com/v7Kr4feg/img/line-1-1.svg"
          />
        </div>
        <div className="absolute w-[17px] h-[17px] top-[43px] left-[91px]">
          <div className="absolute w-[17px] h-[3px] top-0 left-0 bg-[#1e1919]" />
          <div className="absolute w-[17px] h-[3px] top-3.5 left-0 bg-[#1e1919]" />
          <img
            className="absolute w-[17px] h-4 top-0 left-0"
            alt="Subtract"
            src="https://c.animaapp.com/v7Kr4feg/img/subtract-6.svg"
          />
        </div>
        <div className="absolute w-[17px] h-[17px] top-[26px] left-28">
          <div className="absolute w-[17px] h-[3px] top-0 left-0 bg-[#1e1919]" />
          <div className="absolute w-[17px] h-[3px] top-3.5 left-0 bg-[#1e1919]" />
          <img
            className="absolute w-[17px] h-4 top-0 left-0"
            alt="Subtract"
            src="https://c.animaapp.com/v7Kr4feg/img/subtract-7.svg"
          />
        </div>
        <div className="absolute w-[17px] h-[17px] top-5 left-[139px]">
          <div className="absolute w-[17px] h-[3px] top-0 left-0 bg-[#1e1919]" />
          <div className="absolute w-[17px] h-[3px] top-3.5 left-0 bg-[#1e1919]" />
          <img
            className="absolute w-[17px] h-4 top-0 left-0"
            alt="Subtract"
            src="https://c.animaapp.com/v7Kr4feg/img/subtract-8.svg"
          />
        </div>
      </div>

      {/* Use BurgerDropDown Component without inline styles */}
      <BurgerDropDown setDisplaySavedRecipes={setDisplaySavedRecipes} property1={property1} className="burger-dropdown" />
          </div>
  );
};

export default Header;