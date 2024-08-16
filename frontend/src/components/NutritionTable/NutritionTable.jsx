const NutritionTable = ({ recipe }) => {
  const deepGet = (obj, keys) => keys.reduce((xs, x) => xs?.[x] ?? null, obj);
  console.log(recipe);
  //   const getKeys = recipe.hits.map((dataHits) => {
  //     const nutritionalInfo = dataHits.recipe.totalDaily;
  //     return Object.keys(nutritionalInfo);
  //   });

  //console.log(getKeys);

  if (!recipe) {
    return <div>Get yourself a recipe!</div>;
  }
  return (
    <div>
      <h3>{recipe.hits[0].recipe.label}</h3>
      <h3>Nutrients:</h3>
      <ul>
        <li></li>
        <li>{}</li>
      </ul>
    </div>
  );
};

export default NutritionTable;
