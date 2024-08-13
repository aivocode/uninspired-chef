import { Header } from "../components/Header/Header";
import { Pantry } from "../components/Pantry/Pantry";

export const PantryPage = () => {
  return (
    <div className="flex flex-col w-[var(--responsive-device-width)] items-start relative bg-color-background-default-default">
      <header className="relative self-stretch w-full h-[291px] bg-[#feead1] [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-color-border-default-default gap-[var(--size-space-600)]">
        <div className="absolute w-[169px] h-[169px] top-[29px] left-[39px] bg-[#feead1] rounded-[48px]">
          <div className="absolute w-[17px] h-[17px] top-[43px] left-[91px]">
            <div className="absolute w-[17px] h-[3px] top-0 left-0 bg-[#1e1919]" />
            <div className="absolute w-[17px] h-[3px] top-3.5 left-0 bg-[#1e1919]" />
            <img
              className="absolute w-[17px] h-4 top-0 left-0"
              alt="Subtract"
              src="https://c.animaapp.com/IoEhOXU4/img/subtract-7.svg"
            />
          </div>
          <div className="absolute w-[17px] h-[17px] top-[26px] left-28">
            <div className="absolute w-[17px] h-[3px] top-0 left-0 bg-[#1e1919]" />
            <div className="absolute w-[17px] h-[3px] top-3.5 left-0 bg-[#1e1919]" />
            <img
              className="absolute w-[17px] h-4 top-0 left-0"
              alt="Subtract"
              src="https://c.animaapp.com/IoEhOXU4/img/subtract-8.svg"
            />
          </div>
          <div className="absolute w-[17px] h-[17px] top-5 left-[139px]">
            <div className="absolute w-[17px] h-[3px] top-0 left-0 bg-[#1e1919]" />
            <div className="absolute w-[17px] h-[3px] top-3.5 left-0 bg-[#1e1919]" />
            <img
              className="absolute w-[17px] h-4 top-0 left-0"
              alt="Subtract"
              src="https://c.animaapp.com/IoEhOXU4/img/subtract-9.svg"
            />
          </div>
          <div className="absolute w-[91px] h-[103px] top-[60px] left-[13px]">
            <div className="absolute w-[50px] h-[55px] top-[25px] left-[21px] bg-white border-[5px] border-solid border-[#6e6e6e]" />
            <div className="absolute w-[11px] h-[52px] top-[29px] left-[15px] bg-white border-[5px] border-solid border-[#6e6e6e] rotate-[-5.00deg]" />
            <div className="absolute w-[11px] h-[52px] top-7 left-[65px] bg-white border-[5px] border-solid border-[#6e6e6e] rotate-[5.00deg]" />
            <img
              className="absolute w-[91px] h-[39px] top-0 left-0"
              alt="Union"
              src="https://c.animaapp.com/IoEhOXU4/img/union-5.svg"
            />
            <img
              className="w-14 top-20 left-[17px] absolute h-[23px]"
              alt="Union"
              src="https://c.animaapp.com/IoEhOXU4/img/union-6.svg"
            />
            <img
              className="absolute w-[5px] h-11 top-9 left-11"
              alt="Line"
              src="https://c.animaapp.com/IoEhOXU4/img/line-1-1.svg"
            />
          </div>
        </div>
        <Header
          className="!h-[180px] !absolute !left-[968px] !top-6"
          overlapGroupClassName="bg-[url(https://c.animaapp.com/IoEhOXU4/img/ellipse-1-3.svg)]"
          property1="open"
          union="https://c.animaapp.com/IoEhOXU4/img/union-7.svg"
        />
      </header>
      <Pantry className="!relative" />
    </div>
  );
};
