const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 cost: {type:Number,min:1000,max:10000}, 
 varient: String, 
 user: String 
}) 
 
module.exports = mongoose.model("volkswagen",
costumeSchema);