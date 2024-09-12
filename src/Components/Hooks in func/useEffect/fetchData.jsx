import axios from "axios"
import { useEffect, useState } from "react"
import CustomRectangleCard from "../../Props examples/CustomCard"
import "../../../App.css"


const FakeDataComponent=()=>{

     const [data,setData]=useState([])

     const [type,setType]=useState("Products")

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
        <div  className="apiHandler">

        {
        ["Products","Carts","Users"].map(each=><button onClick={()=>typeHandler(each)}  className="btns">{each}</button>)
        }
        </div> 

        
        <h1><u>{type}</u></h1>

        <div className="items">
        {
         data.map((eachProduct)=>{ 
             return(
              <>
                 
              <CustomRectangleCard  source={eachProduct.image}  Name={eachProduct.title} price={eachProduct.price}/>

               </>   
             )
        }) 
         }
         </div>
        </>
    ) 
}

export default FakeDataComponent