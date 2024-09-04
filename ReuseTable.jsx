import { useState } from "react"
import "./table.css"

export const ReusableTable = ({rowData=[],submittedData}) =>{

   
   const removeHandler=(index)=>{
    const filteredData = rowData.filter((_,id)=>index!==id)
        console.log(filteredData,"Filtered")
        submittedData(filteredData)

   }

    return (
        <div>
            <table className="table">
                <tr>
                    <th>UserName</th>
                    <th>Country</th>
                    <th> State</th>
                </tr>
                
            { rowData.map((eachRow,index)=>{
                return(
                    <tr key={index}>
                    <td>{eachRow.userName}</td>
                    <td>{eachRow.countryName}</td>
                    <td>{eachRow.stateName}</td>
                    <td><button onClick={()=>{removeHandler(index)}}>Remove</button></td>

                    </tr>
                )
            })
                    }
                
                
            </table>
        </div>
    )
}