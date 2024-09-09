import { useNavigate } from "react-router-dom"
import "../App.css"

const FrontPageComponent=()=>{

       const navToOther=useNavigate()

       const registerHandler=()=>{

            navToOther("/register")
       }

       const loginHandler=()=>{
             
              navToOther("/login")
       }
    return(
         <>    

        <div className="web-page">

        <button onClick={registerHandler} className="btn1">Registration</button>
 
         <button onClick={loginHandler} className="btn2">Login</button>
     
        <h1>Welcome to Our Website</h1>
 
        </div>
        </>
    )
}
export default FrontPageComponent