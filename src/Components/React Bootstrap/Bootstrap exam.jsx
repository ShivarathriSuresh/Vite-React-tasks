
import CustomRectangleCard from "../Props examples/CustomCard";
import {personsDetails} from "../FakeData/sample data";
import { useEffect, useState } from "react";
import CustomRotatingLinesLoader from "../Loaders/rotatingLine loaders";


 const CustomFrontPage = ()=>{
  const [products, setProducts] = useState([]);

  const [loading,SetLoading]=useState(true);

  const fetchProductsData = async () => {
    try{
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data.products)


    }catch{
        console.error('err');
        
    }
  };
  
    useEffect(() => {
     const timer= setTimeout(()=>{
        SetLoading(false);
        fetchProductsData()
      },5000);

      return()=>clearTimeout(timer)

    }, []);

    return (

      <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First User InterFace Page</h1>
    <p>WelCome! Please Visit My Content </p>

    </div>
    
    {

     loading ? <div style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',height:'50vh'}}> <CustomRotatingLinesLoader/> </div> : 
     <div className="container mt-5">
     <div className="row">
 
       {
       personsDetails.map((eachPerson)=>{
         return (
           <CustomRectangleCard source={eachPerson.image} Name={eachPerson.personName} price={eachPerson.price}/>
           
          ) } )
       }
 
       {products.map((eachProduct)=>{
         return(
           
           <CustomRectangleCard source={eachProduct.thumbnail} Name={eachProduct.title} price={eachProduct.price}/>
           
         
       ) })
     }
 
     </div>
 
   </div>

    }

  </>

    )
};

export default CustomFrontPage;


