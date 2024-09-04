
import { useRef, useState } from "react";

export const UncontrolledComponent = ()=>{

  const userNameEntered = useRef("");
  const passwordEntered = useRef("");

  const [formErr,setFormErr] = useState({});

   const onSubmit = () =>{
       
    const userNameEntered=usernameRef.current.value

    const passwordEntered=passwordRef.current.value


    const formErr=validations(userNameEntered,passwordEntered)

    if(Object.keys(formErr).length>0){
        //Trigger the errors 
        setFormErr(formErr)
    }else{
        // Hit the api 
        ApiLogin(usernameEntered,passwordEntered)
    }
   }

   const validations=(username,password)=>{


    if(!username){
        formErr.usernameError="Please enter username"
    }else if(username.length>20){
      formErr.usernameError="Please enter less than 20 characters"
    }

    if(!password){
      formErr.passwordError="Please enter password"
    }else if(password.length>20){
      formErr.passwordError="Please enter less than 20 characters"
    }

    return formErr

}

 const ApiLogin = async (username,password)=>{
       try{

      const response = await axios.post("https://dummyjson.com/auth/login",{

        "username": username,
        "password":password

    })
    console.log(response)

}catch(err){
    console.log(err)

}

 }


    return(

        <div className="container">

     <h2><u>User Form Validation :</u></h2>     

  <form onSubmit={onSubmit}>

    <div className="form-group">
      <label htmlFor="email"><b>Email Address:</b></label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter email"
        name="email"
      />
    </div>
    <div className="form-group">
      <label htmlFor="pwd"><b>Password:</b></label>
      <input
        type="password"
        className="form-control"
        id="pwd"
        placeholder="Enter password"
        name="pwd"
      />
    </div>
    <div className="checkbox">
      <label>
        <input type="checkbox" name="remember" /> Remember me
      </label>
    </div>
    <button type="submit" className="btn btn-default" style={{backgroundColor:"orange"}}>
      Submit
    </button>
  </form>
</div>

    )
}

