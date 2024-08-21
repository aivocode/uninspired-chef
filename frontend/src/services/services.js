// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;



// Get recipes based on user's pantry
export const getRandomRecipe = async (token) => {
    // DEBUG -- console.log(token)
    const requestOptions = {
        method: "GET",
        headers: {
    Authorization: `Bearer ${token}`
        } 
    }
    const response = await fetch(`http://localhost:3000/recipes`, requestOptions);
    if (!response.ok) {
        throw new Error("Error retreiving a recipe")
    }
    const data = await response.json() 
    // DEBUG -- console.log(data)
    return data
}

export default getRandomRecipe