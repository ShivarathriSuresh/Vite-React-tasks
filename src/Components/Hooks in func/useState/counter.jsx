
import { useState } from "react";

const CustomCounter = () =>{

    let [counter, setCounter] = useState(0);

   const increaseHandler=()=>{
         counter += 1
        setCounter(counter)
    }    
    const decreaseHandler=()=>{
        counter -= 1
        setCounter(counter)
  
    }  
    return(
        <div style={{textAlign:"center",backgroundColor:"yellow",padding:20}}>
        
        <h2 style={{margin:20}}> NumberCounter :{counter}</h2>
        <button onClick={increaseHandler} style={{marginRight:10}}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>

    
        </div>
    )
}

export default CustomCounter;