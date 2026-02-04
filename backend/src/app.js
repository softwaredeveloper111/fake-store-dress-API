const express = require("express");
const dressModel = require("./model/dress.model")
var cors = require('cors')
const app = express();

/**
 * middleware
 */
app.use(express.json())
app.use(cors());
app.use(express.static("./public"))



/**
 * POST; /api/v1/fashion
 * create a new dress in mongodb database
 */
app.post("/api/v1/fashion",async (req,res)=>{
  
  const {title,description,price,category,image} = req.body;
  
  const product = await dressModel.create({
    title,description,price,category,image
  })

  res.status(201).json({
    message:"dress created sucessfully",
    product
  })

})



/**
 * GET /api/v1/fashion
 * get all the dresses from database
 */
app.get("/api/v1/fashion",async (req,res)=>{
 const dresses = await dressModel.find();

 res.status(200).json({
  message:"all dress fetched sucessfully",
  dresses
 })
})



/**
 * GET /api/v1/fashion/id
 * get a single dress by dress id
 */
 app.get("/api/v1/fashion/:id", async (req,res)=>{
  const id = req.params.id;

  const dress = await dressModel.findById(id)

  res.status(200).json({
    message:"dress fetched sucessfully",
    dress
  })

 })

 

 /**
  * DELETE; /api/v1/fashion/id
  * delete a dress from database
  */
 app.delete("/api/v1/fashion/:id",async (req,res)=>{
  const id = req.params.id;

  await dressModel.findByIdAndDelete(id);

  res.status(204).json({
    message:"dress deleted sucessfully"
  })
 })



 /**
  * PATCH /api/v1/fashion/id
  * update a dress details 
  */
app.patch("/api/v1/fashion/:id",async(req,res)=>{
  const id = req.params.id;
  const {price,image} = req.body;

   await dressModel.findByIdAndUpdate(id,{price,image})

  res.status(200).json({
    message:"dress update sucessfully",
  })

})




module.exports = app;