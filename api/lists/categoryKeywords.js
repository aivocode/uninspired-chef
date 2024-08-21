

const categoryKeywords = {
    protein: [
        "chicken", "beef", "pork", "lamb", "turkey", "duck", "fish", "salmon", "tuna", "haddock",
        "cod", "tilapia", "shrimp", "prawn", "scallop", "crab", "lobster", "egg", "tofu", 
        "tempeh", "seitan", "lentil", "beans", "peas", "chickpea", "quinoa", "edamame", 
        "bacon", "sausage", "ham", "steak", "venison", "goat", "bison"
    ],
    vegetables: [
        "carrot", "broccoli", "spinach", "kale", "lettuce", "cabbage", "cauliflower", 
        "tomato", "bell pepper", "onion", "garlic", "ginger", "zucchini", "cucumber", 
        "eggplant", "squash", "pumpkin", "potato", "sweet potato", "beetroot", "radish", 
        "celery", "asparagus", "artichoke", "mushroom", "green bean", "pea", "corn", 
        "brussels sprout", "avocado", "leek", "turnip", "yam", "bok choy", "arugula", 
        "watercress", "fennel", "okra"
    ],
    fruits: [
        "apple", "banana", "orange", "lemon", "lime", "grapefruit", "grape", "pear", 
        "peach", "plum", "cherry", "strawberry", "blueberry", "raspberry", "blackberry", 
        "watermelon", "cantaloupe", "melon", "pineapple", "mango", "papaya", "kiwi", 
        "pomegranate", "fig", "date", "raisin", "coconut", "apricot", "cranberry", 
        "passion fruit", "dragon fruit", "lychee", "persimmon"
    ],
    carbohydrates: [
        "rice", "pasta", "spaghetti", "noodle", "bread", "bun", "baguette", "bagel", 
        "tortilla", "quinoa", "couscous", "barley", "polenta", "bulgur", 
        "millet", "cornmeal", "potato", "sweet potato", "yam", "plantain", "cassava", 
        "lentil", "bean", "chickpea", "split pea", "black-eyed pea", "fava bean", 
        "kidney bean", "pinto bean", "navy bean", "cannellini bean"
    ],
    oils: [
        "olive oil", "canola oil", "vegetable oil", "sunflower oil", "sesame oil", 
        "coconut oil", "avocado oil", "grapeseed oil", "peanut oil", "butter", "ghee", 
        "margarine", "lard", "shortening"
    ],
    condiments: [
        "soy sauce", "tamari", "teriyaki sauce", "barbecue sauce", "mustard", "ketchup", 
        "mayonnaise", "hot sauce", "sriracha", "vinegar", "balsamic vinegar", 
        "apple cider vinegar", "red wine vinegar", "white wine vinegar", "worcestershire sauce", 
        "tabasco", "fish sauce", "oyster sauce", "hoisin sauce", "tahini", "pesto", 
        "hummus", "relish", "salsa", "chutney", "guacamole", "ranch", "caesar dressing", 
        "honey mustard", "vinaigrette"
    ],
    dairy: [
        "milk", "cream", "heavy cream", "half and half", "yogurt", "greek yogurt", 
        "sour cream", "buttermilk", "cheese", "cheddar", "mozzarella", "parmesan", 
        "blue cheese", "feta", "goat cheese", "cream cheese", "ricotta", "cottage cheese", 
        "butter", "ghee", "margarine", "ice cream", "whipped cream"
    ],
    spices: [
        "salt", "pepper", "black pepper", "white pepper", "cayenne", "paprika", "chili powder", 
        "cumin", "coriander", "turmeric", "ginger", "garlic powder", "onion powder", 
        "mustard powder", "nutmeg", "cinnamon", "clove", "cardamom", "allspice", "bay leaf", 
        "thyme", "rosemary", "oregano", "basil", "parsley", "cilantro", "dill", 
        "sage", "tarragon", "marjoram", "mint", "fennel", "star anise", "fenugreek", 
        "saffron", "vanilla", "curry powder", "herbes de provence", "italian seasoning", 
        "chili flakes", "crushed red pepper", "chive", "lemongrass"
    ],
    others: [
        "sugar", "brown sugar", "honey", "maple syrup", "agave syrup", "molasses", 
        "corn syrup", "chocolate", "cocoa powder", "coconut", "yeast", "baking powder", 
        "baking soda", "gelatin", "agar", "cornstarch", "arrowroot", "pectin", 
        "food coloring", "vanilla extract", "almond extract", "lemon juice", 
        "lime juice", "orange juice", "soy milk", "almond milk", "oat milk", 
        "coconut milk", "broth", "stock", "bouillon", "gelato", "sherbet", 
        "pasta sauce", "tomato paste", "tomato sauce", "diced tomato", "canned tomato", 
        "tomato purée", "kale", "seaweed", "nori", "dulse", "wakame", "kelp", "sea salt", "flour","oat"
    ]
};

module.exports = categoryKeywords