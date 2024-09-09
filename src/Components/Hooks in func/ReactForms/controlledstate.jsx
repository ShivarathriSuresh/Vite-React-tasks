
import { useState } from "react"
import ReusableTable from "../../../../ReuseTable"
import { countries,indianStates } from "../../../../countries and states"

 export const ControlledStateForm = () =>{

    const [formData,setFormData] = useState(
        {
        userName:"",
        countryName:"",
        stateName:""
    })

    const [formErr,setFormErr]=useState({
        nameErr:"",
        countryErr:"",
         stateErr:""
    })

     const[submittedData,setSubmittedData]=useState([])

   const onSubmit =(event)=>{
      event.preventDefault();
      const newFormData={
         data1:formData.userName,
         data2:formData.countryName,
         data3:formData.stateName
      }
        setSubmittedData([...submittedData,newFormData])
      console.log(formData);
      setFormData({userName:"",
        countryName:"",
        stateName:""})
      
       }
   

   const onChangeHandler=(event)=>{
    //    const enteredValue=event.target.value;
    //    const enteredName=event.target.name;
                    // ( OR )
       console.log(event.target.value)
       const {name,value} = event.target
       setFormData({...formData,[name]:value})
                // ( OR )     
    //    setFormData({...formData,[event.target.name]:event.target.value})
      let errors = {...formErr}
     switch(name){
        case "userName":
            errors.nameErr = value ? "" : "User name is required";
                break;
        
        case "countryName":
            errors.countryErr = value ? "" : "User name is required";
                break;
    
        case "stateName":
            errors.stateErr = value ? "" : "User name is required";
                break;
         
            default:
                break;     

     }
     setFormErr(errors);

   }
     
    return (
        <div style={{textAlign:"center"}}>
            
            <form onSubmit={onSubmit}>
            <h2>User Information :</h2>

     <label for="name">UserName :</label>
     <input type="text" id="name" placeholder="Enter UserName" 

     name="userName"
     value={formData.userName}
     onChange={onChangeHandler}

     /><br/>

      {formErr.nameErr&&<span style={{color:"red"}} >{formErr.nameErr}</span>}<br/>

     <label for="countryName"> CountryName :</label>
     <select  name="countryName"
     value={formData.countryName}
     onChange={onChangeHandler}
>         <option>Select Your Country</option>
     {countries.map((eachCountry)=>{
        return (
            <>
            
            
            <option>{eachCountry}</option>
            </>
        )
     })}
     </select><br/>

{formErr.countryErr&&<span style={{color:"red"}} >{formErr.countryErr}</span>}<br/>


     <label for="state"> StateName :</label>
     <select name="stateName"
     value={formData.stateName}
     onChange={onChangeHandler}>
               <option>Select Your State</option>

        {indianStates.map((eachState)=>{
            return(
                <>
               
                <option>{eachState}</option>
                </>
            )
        })}
        </select><br/>

{formErr.stateErr&&<span style={{color:"red"}} >{formErr.stateErr}</span>}<br/>

      <button type="submit">Submit</button>
     </form>

     <ReusableTable rowData={submittedData} submittedData={setSubmittedData}/>

        </div>
    )
}


