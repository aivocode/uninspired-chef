import { useState, useEffect } from "react";

import { createPantry, getPantry, updatePantry } from "../services/pantry";

export const PantryPage = () => {
  const [pantryId, setPantryId] = useState("");
  const [pantryRenderMode, setPantryRenderMode] = useState("");

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjZhZThmNmFjYzNiNzc1NDJlYTc0ZDIxIiwiaWF0IjoxNzIyODk1OTcwfQ.QOeRf8AgdnpPEiD_51hF73W9WW2c87Z5v_ZVTo6riP8"
  );
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetchGetPantry();
    }
  }, []);

  // console.log(pantryId);

  const fetchCreatePantry = async () => {
    const data = await createPantry(token, "66b50d1969615f1c46aa93ab", [
      "potato",
      "tomato",
      "banana",
    ]);
    console.log(data);
  };

  const fetchGetPantry = async () => {
    const data = await getPantry("66b50d1969615f1c46aa93ab");
    console.log(data);
    if (data.status === "400") {
      setPantryRenderMode(0);
    } else if ((data.status = "200")) {
      setPantryId(data.pantryId);
      setPantryRenderMode(1);
    }
  };

  const fetchUpdatePantry = async () => {
    const data = await updatePantry(token, pantryId, [
      "cucumber",
      "tomato",
      "lettuce",
    ]);
    console.log(data);
  };

  return (
    <>
      <button
        onClick={() => {
          fetchCreatePantry();
        }}
      >
        Request Create Pantry
      </button>
      <button
        onClick={() => {
          fetchGetPantry();
        }}
      >
        Request Get Pantry
      </button>
      <button
        onClick={() => {
          fetchUpdatePantry();
        }}
      >
        Request Update Pantry
      </button>
    </>
  );
};
