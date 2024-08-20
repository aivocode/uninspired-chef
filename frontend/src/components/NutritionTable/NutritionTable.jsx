import { BarChart } from "@mui/x-charts/BarChart";
const NutritionTable = ({ recipe }) => {
  console.log(recipe);
  //const deepGet = (obj, keys) => keys.reduce((xs, x) => xs?.[x] ?? null, obj);

  //   const getKeys = recipe.hits.map((dataHits) => {
  //     const nutritionalInfo = dataHits.recipe.totalDaily;
  //     return Object.keys(nutritionalInfo);
  //   });
  //console.log(getKeys);
  //   Calcium
  // Carbs
  // Fat
  // Iron
  // Fiber

  const getNutrientValues = (recipe) => {
    return (
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: [
              recipe.totalDaily["PROCNT"].label,
              recipe.totalDaily["CHOCDF"].label,
              recipe.totalDaily["FAT"].label,
              recipe.totalDaily["CA"].label,
              recipe.totalDaily["FE"].label,
              recipe.totalDaily["MG"].label,
            ],
            scaleType: "band",
            //label: "% of RDA",
          },
        ]}
        series={[
          {
            data: [
              recipe.totalDaily["PROCNT"].quantity,
              recipe.totalDaily["CA"].quantity,
              recipe.totalDaily["CHOCDF"].quantity,
              recipe.totalDaily["FAT"].quantity,
              recipe.totalDaily["FE"].quantity,
              recipe.totalDaily["MG"].quantity,
            ],
            label: "% of RDA",
            color: "#bd7550",
          },
        ]}
        width={500}
        height={300}
      />
    );
  };

  if (!recipe) {
    return <div>Get yourself a recipe!</div>;
  }
  return (
    <div>
      <h3> {recipe.label}</h3>
      <h3>{getNutrientValues(recipe)}</h3>
    </div>
  );
};
export default NutritionTable;
