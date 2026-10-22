import react, { useMemo } from "react";
import memo from "react";

const Sum = react.memo(({number})=> {

  const  totalSum= useMemo(()=>{
  let total = 0;
  for(let i = 0; i <= number; i++){
    total += i;
  }
  return total;
 }, [number]);

 
 let total = totalSum;
 console.log("Sum component rendered");

 return (
    <div>
      <h1>Sum Component</h1>
      <p style={{fontSize: "50px", color: "green"}}>Total sum : {total}</p>
    </div>
  );
})

export default Sum;