import { Header } from "../components/Header/Header";
import { Pantry } from "../components/Pantry/Pantry";
import {
  subtract_7,
  subtract_8,
  subtract_9,
  union_5,
  union_6,
  line_1_1,
  ellipse_1_3,
  union_7,
} from '../assets/svg-assets';

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
              src={subtract_7}
            />
          </div>
          <div className="absolute w-[17px] h-[17px] top-[26px] left-28">
            <div className="absolute w-[17px] h-[3px] top-0 left-0 bg-[#1e1919]" />
            <div className="absolute w-[17px] h-[3px] top-3.5 left-0 bg-[#1e1919]" />
            <img
              className="absolute w-[17px] h-4 top-0 left-0"
              alt="Subtract"
              src={subtract_8}
            />
          </div>
          <div className="absolute w-[17px] h-[17px] top-5 left-[139px]">
            <div className="absolute w-[17px] h-[3px] top-0 left-0 bg-[#1e1919]" />
            <div className="absolute w-[17px] h-[3px] top-3.5 left-0 bg-[#1e1919]" />
            <img
              className="absolute w-[17px] h-4 top-0 left-0"
              alt="Subtract"
              src={subtract_9}
            />
          </div>
          <div className="absolute w-[91px] h-[103px] top-[60px] left-[13px]">
            <div className="absolute w-[50px] h-[55px] top-[25px] left-[21px] bg-white border-[5px] border-solid border-[#6e6e6e]" />
            <div className="absolute w-[11px] h-[52px] top-[29px] left-[15px] bg-white border-[5px] border-solid border-[#6e6e6e] rotate-[-5.00deg]" />
            <div className="absolute w-[11px] h-[52px] top-7 left-[65px] bg-white border-[5px] border-solid border-[#6e6e6e] rotate-[5.00deg]" />
            <img
              className="absolute w-[91px] h-[39px] top-0 left-0"
              alt="Union"
              src={union_5}
            />
            <img
              className="w-14 top-20 left-[17px] absolute h-[23px]"
              alt="Union"
              src={union_6}
            />
            <img
              className="absolute w-[5px] h-11 top-9 left-11"
              alt="Line"
              src={line_1_1}
            />
          </div>
        </div>
        <Header
          className="!h-[180px] !absolute !left-[968px] !top-6"
          overlapGroupClassName={`bg-[url(${ellipse_1_3})]`}
          property1="open"
          union={union_7}
        />
      </header>
      <Pantry className="!relative" />
    </div>
  );
};
