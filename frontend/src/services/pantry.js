const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const createPantry = async (token, userId, ingredientsArray) => {
  const payload = {
    // userId that came from .jsx page/component
    userId: userId,
    // array of ingredients that came from .jsx page/component
    ingredientsArray: ingredientsArray,
  };

  const requestOptions = {
    method: "POST",
    // we send token with headers because Cors requires it
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  };

  // fetch request is built based on route defined in ../api/app.js and ../api/routers/pantry.js
  const response = await fetch(
    `${BACKEND_URL}/pantry/create-pantry`,
    requestOptions
  );
  // console.log(response.status);

  const data = await response.json();
  // console.log(data);
  return data;
};

export const getPantry = async (userId) => {
  // simple fetch GET request with query parameter
  const response = await fetch(`${BACKEND_URL}/pantry/get-pantry?userId=${userId}`);
  // console.log(response.status);

  const data = await response.json();
  // console.log(data);
  return data;
};
