import { BarChart } from "@mui/x-charts/BarChart";
const NutritionTable = ({ recipe }) => {
  console.log(recipe["label"]);
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
              recipe.totalDaily["CA"].label,
              recipe.totalDaily["CHOCDF"].label,
              recipe.totalDaily["FAT"].label,
            ],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [
              recipe.totalDaily["CA"].quantity,
              recipe.totalDaily["CHOCDF"].quantity,
              recipe.totalDaily["FAT"].quantity,
            ],
            label: "% of RDA",
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
      <h3>Recipe Nutrients: {recipe}</h3>
      <h3>{getNutrientValues(recipe)}</h3>
    </div>
  );
};
export default NutritionTable;
