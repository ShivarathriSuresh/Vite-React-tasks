
import { useState } from "react";

export const ControlledComponent = () =>{

   const [modelName,setModelName] = useState("");

   const [modelErr,setModelErr] = useState("")

   const modelHandler=(event)=>{
         const modelName=event.target.value

         setModelName(modelName);
         const error=formValidations(modelName)
        
         if(error){
          setModelErr(error)
         }
         else{
             setModelErr("")
         }
         console.log(modelName);
         
   }

   const formValidations =()=>{

     let error = ""
     const modelRegex=/^samsung/i
     
     if(!value){
      error="Please enter model name"
     }else if(modelRegex.test(value)){
         error="Please enter proper samsung model"
     }

     return error
   }

   const onSubmit =(event)=>{   

       if(modelErr){
          alert("please fill properly")
       }
   }


    return (
        <div>
        <h2><u>Samsung Service Center :</u></h2>     

<form onSubmit={onSubmit}>

  <div className="form-group">
    <label for="name"><b>Model Name :</b></label>
    <input type="text" id="name" placeholder="Enter your ModelName" 
      value={modelName}
      onChange={modelHandler}
     
    />

    {modelErr&&<span style={{color:"red"}}>{modelErr}</span>}

    <br/>
  <button type="submit" className="btn btn-default" style={{backgroundColor:"orange"}}>
    Submit
  </button>
 </div>

</form>
        </div>
    )
}