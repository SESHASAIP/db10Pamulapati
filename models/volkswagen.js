const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 cost: Number, 
 varient: String, 
 user: String 
}) 
 
module.exports = mongoose.model("volkswagen", 
costumeSchema) 