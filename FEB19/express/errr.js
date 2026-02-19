import express from 'express';
const app = express();

app.use(express.json());


app.get("/about", (req, res)=>{
  res.send("About page");
})

app.post("/", (req, res)=>{
  res.send("Post request received");
})

app.all("*", (req, res)=>{
  res.status(404).send("404-page not found");
})

app.listen(3000, ()=>{
  console.log("server is running on the port 3000");
})