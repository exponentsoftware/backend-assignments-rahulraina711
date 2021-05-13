const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    username:{type: String},
    title:{type: String},
    done:{type: Boolean, default: false},
    category:{type: String}
});

module.exports = mongoose.model("Todo" ,todoSchema);