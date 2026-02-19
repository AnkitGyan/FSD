function dosomething(){
  throw new Error("Something went wrong!");
}

function init(){
  try{
    dosomething();
  } catch(e){
    console.log("e.message: " + e);
  }
  console.log("After successful error handling");
}

init();