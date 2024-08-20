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
      <h2 style={{ fontWeight: "Bold", paddingTop: "20px" }}>
        {" "}
        Health Labels:{" "}
      </h2>
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "20px",
          lineHeight: "20px",
          fontSize: "15px",
        }}
      >
        {" "}
        {myDietList}
      </ul>
      <h2 style={{ fontWeight: "Bold" }}> Allergen Information: </h2>
      <p
        style={{
          paddingLeft: "20px",
          lineHeight: "15px",
          fontSize: "15px",
        }}
      >
        {" "}
        {healthLabelstext}
      </p>
    </div>
  );
};
