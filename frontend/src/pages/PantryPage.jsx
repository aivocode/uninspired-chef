import  Header  from "../components/Header/Header";
import { Pantry } from "../components/Pantry/Pantry";
import '../static/PantryPage.css';

export const PantryPage = () => {
      return (
        <div className="pantrypage-container">
          <Header />
            <Pantry/>
        </div>
      );
    };