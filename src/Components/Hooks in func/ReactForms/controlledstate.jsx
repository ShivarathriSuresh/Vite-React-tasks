
import { useState } from "react"
import { ReusableTable } from "../../../../ReuseTable"

 export const ControlledStateForm = () =>{

    const [formData,setFormData] = useState({
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
        setSubmittedData([...submittedData,formData])
      console.log(formData);
      setFormData({
        userName:"",
        countryName:"",
        stateName:""

      })
      
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
            //userName validation 
        case "countryName":
            errors.countryErr = value ? "" : "User name is required";
                break;
            //countryName validation 
        case "stateName":
            errors.stateErr = value ? "" : "User name is required";
                break;
            //stateName validation   
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
     <input type="text" id="country" placeholder="Enter CountryName" 

     name="countryName"
     value={formData.countryName}
     onChange={onChangeHandler}

     /><br/>

{formErr.countryErr&&<span style={{color:"red"}} >{formErr.countryErr}</span>}<br/>


     <label for="state"> StateName :</label>
     <input type="text" id="state" placeholder="Enter StateName" 

     name="stateName"
     value={formData.stateName}
     onChange={onChangeHandler}

     /><br/>

{formErr.stateErr&&<span style={{color:"red"}} >{formErr.stateErr}</span>}<br/>

      <button type="submit">Submit</button>
     </form>

     <ReusableTable rowData={submittedData} submittedData={setSubmittedData}/>

        </div>
    )
}


