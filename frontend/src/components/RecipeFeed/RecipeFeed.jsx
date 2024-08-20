import { SuggestionsCard } from "../SuggestionsCard/SuggestionsCard";
import './RecipeFeed.css';

export const RecipeFeed = (suggestionsData) => {
  // console.log("this is the suggestionsData being passed from HomePage",suggestionsData)
  // if (!Array.isArray(suggestionsData) || suggestionsData.length === 0) {
  //   return
  // }
  // console.log(suggestionsData[0].recipe.recipe.label)
  const recipesToDisplay = suggestionsData.suggestionsData.slice(0,3)
  const token = localStorage.getItem("token");
  // console.log(suggestionsData);


  // console.log("here are your suggestions recipes: ",recipesToDisplay)

  return (
    <div className="recipe-feed">
      {recipesToDisplay.map((suggestion, index) => (
        <SuggestionsCard
          index={index}
          key={suggestion.recipe.recipe.uri}
          uriKey={suggestion.recipe.recipe.uri}
          suggestion={suggestion}
          suggestionsData={suggestionsData}
          token={token}
        />
      ))}
    </div>
  );
};
