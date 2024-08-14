import { useState } from 'react';
import { FullRecipePopout } from '../FullRecipePopout/FullRecipePopout';

export const RecipeCard = ({ title, description, saved }) => {
  const [showPopout, setShowPopout] = useState(false);

  const handleSeeMoreClick = () => {
    setShowPopout(true);
  };

  const handleClosePopout = () => {
    setShowPopout(false);
  };

  return (
    <>
      <div className="recipe-card">
        <div className="image-placeholder" />
        <div className="recipe-details">
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleSeeMoreClick}>See more</button>
        </div>
        {saved && <div className="bookmark" />}
      </div>

      {showPopout && (
        <div className="popout-overlay">
          <FullRecipePopout />
          <button onClick={handleClosePopout} className="close-popout">
            Close
          </button>
        </div>
      )}
    </>
  );
};
