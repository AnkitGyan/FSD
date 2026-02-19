const fs = require('fs');

fs.readFile("foo.txt", (err, data)=>{
  if(err){
    console.log(err);
  } else{
    console.log(data.toString());
  }
});

fs.readFile("mytext.txt", (err, data)=>{
  if(err){
    console.log(err);
  }
   else{
    console.log(data.toString());
   }
});