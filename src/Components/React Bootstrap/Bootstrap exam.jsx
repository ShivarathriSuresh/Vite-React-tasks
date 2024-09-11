
import CustomRectangleCard from "../Props examples/CustomCard";
import {personsDetails} from "../FakeData/sample data";
import { useEffect, useState } from "react";


 const CustomFrontPage = ()=>{
  const [products, setProducts] = useState([]);

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
  // fetchCartsData();
    useEffect(() => {
      fetchProductsData()
    }, []);

    return (
        <>

  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First User InterFace Page</h1>
    <p>WelCome! Please Visit My Content </p>
  </div>
  <div className="container mt-5">
    <div className="row">

      {/* {personsDetails.map((eachPerson)=>{
        return (
          <CustomRectangleCard source={eachPerson.image} Name={eachPerson.personName} />
          
        )
      })} */}

      {products.map((eachProduct)=>{
        return(
          <>
          <CustomRectangleCard source={eachProduct.thumbnail} Name={eachProduct.title} />
          </>
        )
      })}
      
    </div>
  </div>
</>

    )
}
export default CustomFrontPage;


