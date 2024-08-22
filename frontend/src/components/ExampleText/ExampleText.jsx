import "../ExampleText/ExampleText.css";

export const ExampleText = ({ recipe }) => {
  // fetch health & diet labels
  const healthLabels = Object.values(recipe.healthLabels);
  const dietLabels = Object.values(recipe.dietLabels);

  // if there aren't any labels display below string
  if (dietLabels.length == 0) {
    dietLabels.push("No health labels to display");
  }

  // format string with ", " & " ."
  const healthLabelstext = healthLabels.join(", ") + ".";

  // output list from array
  const myDietList = dietLabels.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <h2
        style={{
          fontWeight: "Bold",
          paddingTop: "20px",
          paddingBottom: "12px",
        }}
      >
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
      <h2
        style={{
          fontWeight: "Bold",
          paddingBottom: "12px",
          paddingTop: "20px",
        }}
      >
        {" "}
        Allergen Information:{" "}
      </h2>
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
