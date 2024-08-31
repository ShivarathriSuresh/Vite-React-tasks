
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ()=>{

   const clickMe=()=>toast("Hey! You are Successfully Reached")    
    return (
        <>
        <button onClick={clickMe} style={{backgroundColor:"yellowGreen",color:"white",marginBottom:20}}>Notify</button>
        <ToastContainer/>
        </>
    )
}
export default CustomToast