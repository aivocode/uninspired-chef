import { CuttingTransition } from "../CuttingTransition/CuttingTransition";
import { TextContentTitle } from "../TextContentTitle/TextContentTitle";
import './LandingScreen.css';

export const LandingScreen = ({ className }) => {
  return (
    <div className={`landing-screen w-[var(--responsive-device-width)] bg-[#feead1] ${className}`}>
      <div className="content-container h-full flex flex-col justify-center items-center relative">
        <TextContentTitle className="title-content" />
        <div className="action-container mt-6">
          <button className="inspire-button" onClick={() => document.querySelector('.cutting-transition').click()}>
            <div className="button-text">Inspire Me!</div>
          </button>
        </div>
        <img
          className="chopping-board w-full left-0 h-[163px] absolute"
          alt="Chopping board"
          src="https://c.animaapp.com/XNVGwrYa/img/chopping-board-2.svg"
        />
        <CuttingTransition className="cutting-transition" />
      </div>
    </div>
  );
};
