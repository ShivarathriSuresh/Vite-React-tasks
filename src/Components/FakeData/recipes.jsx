import { useState,useEffect } from "react";
import CustomRectangleCard from "../Props examples/CustomCard";

export const CustomRecipesCard=()=>{
    const[recipes,setRecipes]=useState([]);
    const fetchRecipesData=async ()=>{
        try{
            const response= await fetch('https://dummyjson.com/recipes');
            if(!response.ok){
                throw new Error(`Response status: ${response.status}`)
            }
            const data= await response.json(); 
         setRecipes(data.recipes)
        }
    
        catch{
            console.error('error');
        }
    }
       useEffect(()=>{
        fetchRecipesData()
    },[]);

    return(
        <>
        {recipes.map((eachRecipes)=>{
           
           <CustomRectangleCard source={eachRecipes.image} Name={eachRecipes.name} />
        })}
        </>
    )
}
