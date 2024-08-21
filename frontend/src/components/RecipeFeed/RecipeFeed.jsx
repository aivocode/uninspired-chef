
import { SuggestionsCard } from "../SuggestionsCard/SuggestionsCard";
import './RecipeFeed.css';

export const RecipeFeed = (suggestionsData) => {
  // DEBUG --  console.log("this is the suggestionsData being passed from HomePage",suggestionsData)

  // console.log(suggestionsData[0].recipe.recipe.label)
  const recipesToDisplay = suggestionsData.suggestionsData.slice(0,3)

  // DEBUG -- console.log("here are your suggestions recipes: ",recipesToDisplay)

  return (
    <div className="recipe-feed">
      {recipesToDisplay.map((suggestion) => (
        <SuggestionsCard 
          uriKey={suggestion.recipe.recipe.uri}
          suggestion={suggestion}
        />
      ))}
    </div>
  );
};
