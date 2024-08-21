const request = require("supertest");

const app = require("../../app");
const Pantry = require("../../models/pantry");
const User = require("../../models/user");

require("../mongodb_helper");

// Setup token so we can put it in Authorization
const secret = process.env.JWT_SECRET;
const JWT = require("jsonwebtoken");
const createToken = (userId) => {
  return JWT.sign(
    {
      user_id: userId,
      iat: Math.floor(Date.now() / 1000) - 5 * 60,
    },
    secret
  );
};
let token;

// npm run test tests/controllers/pantryController.test.js
describe("/pantry", () => {
  beforeEach(async () => {
    await Pantry.deleteMany({});
    await User.deleteMany({});
  });

  // mock ingredientsArray, copied from Mongo Pantry object - it's not the same as
  // two mock ingredientsArray below mockUser, as those came from frontend
  const mockIngredientsArrayFromMongo = [
    {
      foodId: "food_abiw5baauresjmb6xpap2bg3otzu",
      label: "Potato",
      knownAs: "potato",
      nutrients: {
        ENERC_KCAL: 77,
        PROCNT: 2.05,
        FAT: 0.09,
        CHOCDF: 17.5,
        FIBTG: 2.1,
      },
      category: "Generic foods",
      categoryLabel: "food",
      image:
        "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg",
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
          weight: 250,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          weight: 213,
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
              weight: 369,
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
              weight: 170,
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_tiny",
                  label: "tiny",
                },
              ],
              weight: 65,
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
              weight: 213,
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_potato",
          label: "Potato",
          weight: 213,
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
              weight: 213,
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
              ],
              weight: 369,
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
              weight: 170,
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_baby",
          label: "Baby",
          weight: 65,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_fingerling",
          label: "Fingerling",
          weight: 85,
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
              weight: 65,
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
          weight: 1,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
          weight: 28.349523125,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
          weight: 453.59237,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
          weight: 1000,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          weight: 150,
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_diced",
                  label: "diced",
                },
              ],
              weight: 150,
            },
          ],
        },
      ],
      ingredientQuantity: "10",
    },
    {
      foodId: "food_a6k79rrahp8fe2b26zussa3wtkqh",
      label: "Tomato",
      knownAs: "tomato",
      nutrients: {
        ENERC_KCAL: 18,
        PROCNT: 0.88,
        FAT: 0.2,
        CHOCDF: 3.89,
        FIBTG: 1.2,
      },
      category: "Generic foods",
      categoryLabel: "food",
      image:
        "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg",
      measures: [
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          label: "Serving",
          weight: 148,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          label: "Whole",
          weight: 123,
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  label: "large",
                },
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_whole",
                  label: "whole",
                },
              ],
              weight: 227.5,
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_whole",
                  label: "whole",
                },
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  label: "small",
                },
              ],
              weight: 91,
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_whole",
                  label: "whole",
                },
              ],
              weight: 123,
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_tomato",
          label: "Tomato",
          weight: 123,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_bunch",
          label: "Bunch",
          weight: 90,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_plum",
          label: "Plum",
          weight: 62,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_half",
          label: "Half",
          weight: 31,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_wedge",
          label: "Wedge",
          weight: 31,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cherry",
          label: "Cherry",
          weight: 17,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          label: "Slice",
          weight: 27,
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                  label: "medium",
                },
              ],
              weight: 20,
            },
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_thin",
                  label: "thin",
                },
              ],
              weight: 15,
            },
          ],
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          label: "Gram",
          weight: 1,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          label: "Ounce",
          weight: 28.349523125,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          label: "Pound",
          weight: 453.59237,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          label: "Kilogram",
          weight: 1000,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_handful",
          label: "Handful",
          weight: 18.625,
        },
        {
          uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          label: "Cup",
          weight: 149,
          qualified: [
            {
              qualifiers: [
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_sliced",
                  label: "sliced",
                },
                {
                  uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_chopped",
                  label: "chopped",
                },
              ],
              weight: 180,
            },
          ],
        },
      ],
      ingredientQuantity: "4",
    },
  ];

  //  mock User, copied copied fron Mongo
  mockUser = {
    fullName: "A",
    userName: "aivocode",
    email: "a@a.com",
    password: "Qwerty1!",
    favouritedRecipes: [],
  };

  //  mock ingredientsArray, copied from web browser console.log, used for POST request
  mockIngredientsArray = [
    {
      ingredientName: "Potato",
      ingredientQuantity: "20",
    },
    {
      ingredientName: "Tomato",
      ingredientQuantity: "5",
    },
  ];

  // mock ingredientsArray, copied from web browser console.log, used for PUT request
  mockIngredientsArrayForUpdate = [
    {
      ingredientName: "Banana",
      ingredientQuantity: "10",
    },
    {
      ingredientName: "Tomato",
      ingredientQuantity: "1",
    },
    {
      ingredientName: "Egg",
      ingredientQuantity: "10",
    },
  ];

  //  mock bad ingredientsArray with pantry ingredients that won't exist in Edamam, copied from web browser console.log, used for POST/PUT request
  mockBadIngredientsArray = [
    {
      ingredientName: "Potato",
      ingredientQuantity: "20",
    },
    {
      ingredientName: "egeagfaegahsadassda",
      ingredientQuantity: "20",
    },
    {
      ingredientName: "asfasfahasdscbbcb",
      ingredientQuantity: "5",
    },
  ];

  describe("/pantry/create-pantry, POST, when token, userId, ingredientsArray are provided", () => {
    test("the response code is 200", async () => {
      const user = new User(mockUser);
      await user.save();

      token = createToken(user.id); // create token so it can be passed as parameter

      const response = await request(app)
        .post("/pantry/create-pantry")
        .set("Authorization", `Bearer ${token}`)
        .send({ userId: user.id, ingredientsArray: mockIngredientsArray }); // we are sending good one

      const pantry = await Pantry.findOne({ user_id: user.id });

      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual({
        pantryId: pantry.id,
        userId: pantry.user_id.toString(),
        ingredientsArray: pantry.ingredientsArray,
        status: 200,
        message: `Pantry created with all ingredients specified.`,
      });
    });

    test("the response code is 404", async () => {
      const user = new User(mockUser);
      await user.save();

      token = createToken(user.id); // create token so it can be passed as parameter

      const response = await request(app)
        .post("/pantry/create-pantry")
        .set("Authorization", `Bearer ${token}`)
        .send({ userId: user.id, ingredientsArray: mockBadIngredientsArray }); // we are sending bad one

      expect(response.statusCode).toBe(404);
      expect(response.body).toStrictEqual({
        status: 404,
        message: `Ingredients not available in database: ${mockBadIngredientsArray[1].ingredientName}, ${mockBadIngredientsArray[2].ingredientName}. Try again.`,
      });
    });
  });

  describe("/pantry/get-pantry, GET, when userId is provided", () => {
    test("response code is 200", async () => {
      const user = new User(mockUser);
      await user.save();

      const pantry = new Pantry({
        user_id: user.id,
        ingredientsArray: mockIngredientsArrayFromMongo,
      });
      await pantry.save(); // we need to save Pantry so GET request has something to get

      const response = await request(app).get(
        `/pantry/get-pantry?userId=${user.id}`
      );

      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual({
        pantryId: pantry.id,
        userId: pantry.user_id.toString(),
        ingredientsArray: pantry.ingredientsArray,
        status: 200,
      });
    });

    test("response code is 400", async () => {
      const user = new User(mockUser);
      await user.save();

      const response = await request(app).get(
        `/pantry/get-pantry?userId=${user.id}`
      );

      expect(response.statusCode).toBe(400);
      expect(response.body).toStrictEqual({
        status: 400,
        message:
          "No Pantry found. Click +ADD to add pantry ingredient, click CREATE to create Pantry.",
      });
    });
  });

  describe("/pantry/update-pantry, PUT, when token, pantryId, ingredientsArray are provided", () => {
    test("response code is 201", async () => {
      const user = new User(mockUser);
      await user.save();

      token = createToken(user.id); // create token so it can be passed as parameter

      const pantry = new Pantry({
        user_id: user.id,
        ingredientsArray: mockIngredientsArrayFromMongo,
      });
      const createdPantry = await pantry.save(); // we return this to variable so we can pass pantry.id to parameters

      const response = await request(app)
        .put("/pantry/update-pantry")
        .set("Authorization", `Bearer ${token}`)
        .send({
          pantryId: createdPantry.id.toString(),
          ingredientsArray: mockIngredientsArrayForUpdate,
        }); // we are sending good one, but this time designed for PUT request

      const updatedPantry = await Pantry.findOne({ user_id: user.id });

      expect(response.statusCode).toBe(201);
      expect(response.body).toStrictEqual({
        pantryId: updatedPantry.id.toString(),
        userId: updatedPantry.user_id.toString(),
        ingredientsArray: updatedPantry.ingredientsArray,
        status: 201,
        message: `Pantry updated with all ingredients specified.`,
      });
    });

    test("response code is 404", async () => {
      const user = new User(mockUser);
      await user.save();

      token = createToken(user.id); // create token so it can be passed as parameter

      const pantry = new Pantry({
        user_id: user.id,
        ingredientsArray: mockIngredientsArrayFromMongo,
      });
      const createdPantry = await pantry.save(); // we return this to variable so we can pass pantry.id to parameters

      const response = await request(app)
        .put("/pantry/update-pantry")
        .set("Authorization", `Bearer ${token}`)
        .send({
          pantryId: createdPantry.id.toString(),
          ingredientsArray: mockBadIngredientsArray,
        }); // we are sending bad one, but this time in PUT request

      expect(response.statusCode).toBe(404);
      expect(response.body).toStrictEqual({
        status: 404,
        message: `Ingredients not available in database: ${mockBadIngredientsArray[1].ingredientName}, ${mockBadIngredientsArray[2].ingredientName}. Try again.`,
      });
    });
  });
});
