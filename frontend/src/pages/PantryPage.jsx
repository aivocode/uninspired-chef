import Header from "../components/Header/Header";
import { Pantry } from "../components/Pantry/Pantry";
import "../static/Pantrypage.css";

export const PantryPage = () => {
  return (
    <div className="pantrypage-container">
      <Header />
      <Pantry />
    </div>
  );
};
