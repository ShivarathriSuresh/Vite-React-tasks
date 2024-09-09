import axios from "axios"
import { useEffect, useState } from "react"


const FakeDataComponent=()=>{

     const [data,setData]=useState([])

     const [type,setType]=useState("products")

     useEffect(()=>{
      fetchData();
 },[type])

     
     const fetchData = async()=>{

        try{

          const {data,status}= await axios.get(`https://fakestoreapi.com/${type}`)
          if(status==200){
            setData(data)
            console.log(data)
            
          }
        }
        catch(err){
            console.error(err)
        }
     }


     const typeHandler=(each)=>{
          setType(each)
     }

    return (

        <>
        <h2>useEffect Example</h2>

        {
        ["products","carts","users"].map(each=><button onClick={()=>typeHandler(each)}>{each}</button>)
        }

        <h2>{type}</h2>

        {
         data.map((eachProduct)=> <pre>  {JSON.stringify(eachProduct)}   </pre>) 
         }
        </>
    ) 
}

export default FakeDataComponent