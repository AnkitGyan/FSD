import express from "express";

 const app = express();

 app.get("/", (req, res)=>{
    const name = req.query.name;
    res.status(200).json({
      message: `Welcome to Express JS, ${name}!`,
    })       
 })

 app.listen(3000, ()=>{
  console.log("server is running on port 3000");
 })