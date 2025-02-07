//////////////////////////////////////////////
//////// Import Dependencies
///////////////////////////////////////////////
const mongoose = require("./connection")

//////////////////////////////////////////////
//////// Define Model
///////////////////////////////////////////////

// Pull schema and model from mongoose
const { Schema, model } = mongoose

// Make user schema
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = model("User", userSchema)

//////////////////////////////////////////////
//////// Export Model
///////////////////////////////////////////////
module.exports = User