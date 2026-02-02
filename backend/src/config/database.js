const mongoose = require("mongoose");


function connectToDB(){
  mongoose.connect("mongodb+srv://fire-katana:Souravgiri%401999@cluster1.u5vvvsq.mongodb.net/fakeDressApi")
  .then(()=>{
    console.log(`connected to dababase.`)
  })
}



module.exports  = connectToDB