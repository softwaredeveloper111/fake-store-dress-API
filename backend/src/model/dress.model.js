const mongoose = require("mongoose");


const dressSchema = new mongoose.Schema({
  title:String,
  description:String,
  price: Number,
  image:String,
  category:String,
  
})


const dressModel = mongoose.model("dress",dressSchema)

module.exports = dressModel;