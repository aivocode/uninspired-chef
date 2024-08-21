const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    recipe: { 
        type: Object,
        required: true
    },
    
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = { 
    RecipeSchema, //exporting recipe schema (for use in User schema)
    Recipe // exporting recipe model
};
