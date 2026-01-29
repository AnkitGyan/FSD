//Import the http module
const http = require('http');

//create a server 

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end("Welcome to the NODE.js Tutorial");
});

//listen on port 3000
server.listen(3000, ()=>{
  console.log("server is running on port 3000");
});