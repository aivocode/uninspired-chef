require("../mongodb_helper");
const Pantry = require("../../models/pantry");

// npm run test tests/models/pantryModel.test.js
describe("Pantry model", () => {

  // mock user_id
  const mockUserId = "66c0f850b0e5e90f748f3750";

  // mock ingredientsArray, copy pasted from Mongo
  const mockIngredientsArray = [
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

  beforeEach(async () => {
    await Pantry.deleteMany({});
  });

  it("has user_id key-value, ingredientsArray key-value", () => {
    const pantry = new Pantry({
      user_id: mockUserId,
      ingredientsArray: mockIngredientsArray,
    });
    expect(pantry.user_id.toString()).toEqual(mockUserId);
    expect(pantry.ingredientsArray).toStrictEqual(mockIngredientsArray); //when comparing whole object to object (not their values inside), toStrictEqual should be used
  });


  it("can find Pantry by it's creator's user_id", async () => {
    const pantry = new Pantry({
      user_id: mockUserId,
      ingredientsArray: mockIngredientsArray,
    });
    await pantry.save();

    const foundPantry = await Pantry.findOne({ user_id: mockUserId });

    expect(foundPantry.user_id.toString()).toEqual(mockUserId);
    expect(pantry.ingredientsArray).toStrictEqual(mockIngredientsArray);
  });
});
