export const ExampleText = ({ recipe }) => {
  const healthLabels = Object.values(recipe.healthLabels);
  const dietLabels = Object.values(recipe.dietLabels);
  //   console.log(healthLabels);
  const healthLabelstext = healthLabels.join(", ") + ".";
  //const dietLabelsText = dietLabels.join(", ") + ".";

  const myDietList = dietLabels.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <ul>{myDietList}</ul>
      Health Labels
      <p>{healthLabelstext}</p>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  );
};
