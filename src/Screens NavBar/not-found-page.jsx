import { useNavigate } from "react-router-dom"


const NotFoundPage=()=>{

     const navGate = useNavigate()

     const navigateHandler=()=>{
        navGate ("/")
     }

    return(
        <>
        <h1>!Ooops</h1>
        <h3>not found this page</h3>
        <button onClick={navigateHandler}>Back to home</button>
        </>
    )
}
export default NotFoundPage