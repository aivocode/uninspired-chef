// import "ExampleText.css"
import "../ExampleText/ExampleText.css";

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
      <h2> Health Labels: </h2>
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "40px",
          padding: "20px",
          lineHeight: "20px",
        }}
      >
        {" "}
        {myDietList}
      </ul>
      <h2> Alergen Information: </h2>
      <p style={{ padding: "20px", lineHeight: "20px" }}> {healthLabelstext}</p>
    </div>
  );
};
