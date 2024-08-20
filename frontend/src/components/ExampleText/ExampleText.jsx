export const ExampleText = ({ recipe }) => {
  const healthLabels = Object.values(recipe.healthLabels);
  //   const dietLabels = Object.values(recipe.dietLabels);
  //   console.log(healthLabels);
  const healthLabelstext = healthLabels.join(", ") + ".";
  //   const dietLabelsText = dietLabels.join(", ") + ".";

  return (
    <div>
      <p>{healthLabelstext}</p>
      {/* <p>{dietLabelsText}</p> */}
    </div>
  );
};
