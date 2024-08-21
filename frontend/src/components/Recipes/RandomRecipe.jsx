const RandomRecipe = ({ recipe }) => {
    if (!recipe) {
        return <div>Get yourself a recipe!</div>
    }
    return(
        <div>
            <img src={recipe.hits[0].recipe.images.REGULAR.url}/>
            <h3>{recipe.hits[0].recipe.label}</h3>
            <h3>
                Ingredients:
            </h3>
                <ul>
                    {recipe.hits[0].recipe.ingredientLines.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
        </div>

)};

export default RandomRecipe;