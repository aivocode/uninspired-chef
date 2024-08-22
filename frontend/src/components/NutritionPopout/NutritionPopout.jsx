import { ExamplePlot } from "../RadialChart/ExamplePlot";
import { ExampleText } from "../ExampleText/ExampleText";
import "./NutritionPopout.css";

export const NutritionPopout = ({ recipe, closeMe }) => {
  const recipeData = recipe.recipe;
  //console.log(recipe.recipe);

  return (
    <div className="full-recipe-popout-overlay">
      <div className="full-recipe-popout">
        <h2
          style={{
            fontSize: "50px",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          {" "}
          Nutritional Information
        </h2>
        {/* <div className="full-recipe-content"></div> */}
        <div className="top-buttons">
          {/* <div className="save-recipe-button"></div> */}
          <button className="close-button" onClick={closeMe}>
            &times;
          </button>
        </div>
        {/* <div className="recipe-header">
            <div className="recipe-title">{recipe.recipe.label}</div>
          </div> */}

        {/* <div className="recipe-serves">
            <strong>Serves:</strong> {recipe.recipe.yield} people
          </div> */}

        {/* <div className="full-recipe-image"></div> */}

        <ExamplePlot
          recipe={recipeData}
          width={800}
          height={500}
          showControls={true}
        />
        <ExampleText recipe={recipeData} />
      </div>
    </div>
  );
};
