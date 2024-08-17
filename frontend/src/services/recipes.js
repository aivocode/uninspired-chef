const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Get recipes based on user's pantry
export const getRandomRecipe = async (token) => {
    console.log(token)
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
    console.log(data)
    return data
}

// add a recipe to user's favourites
export const addRecipeToFavourites = async (token, recipe) => {

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ${token}'
        },
        body: JSON.stringify({recipe})
    };

    const response = await fetch('${BACKEND_URL}/savedrecipes', requestOptions);

    if (response.status !== 200) {
        throw new Error('Unable to add recipe to favourites');
    }

    const data = await response.json();
    return data;
}

// remove a recipe from user's favourites
export const removeRecipeFromFavourites = async (token, recipe) => {

    const requestOptions = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ${token}'
        },
        body: JSON.stringify({recipe})
    };

    const response = await fetch('${BACKEND_URL}/savedrecipes', requestOptions);

    if (response.status !== 200) {
        throw new Error('Unable to remove recipe from favourites');
    }

    const data = await response.json();
    return data;
}