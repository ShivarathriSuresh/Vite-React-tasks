
import { useEffect, useState } from "react"
import {RotatingLines} from "react-loader-spinner"


const CustomRotatingLinesLoader = (props)=>{
    const [loading,SetLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            SetLoading(false)
        },5000)
    },[])
    return (
        <>
       {loading && <RotatingLines
//   visible={true}
//   height="60"
//   width="60"
//   color="blue"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  {...props}            // {...props}(Spread operator) means => visible={true}  height="60" width = "60"  color = "blue"   //
  />}

        </>
    )
}

export default CustomRotatingLinesLoader