

const ReusableTable = ({rowData=[],submittedData}) =>{

   
   const removeHandler=(index)=>{
    const filteredData = rowData.filter((_,id)=>index!==id)
        console.log(filteredData,"Filtered")
        submittedData(filteredData)

   }

    return (
        <div>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>UserName</th>
          <th>CountryName</th>
          <th>StateName</th>
        </tr>
      </thead>
      <tbody>
       { rowData.map((eachRow,index)=>{
            return (
                <tr key={index}> 
                <td>{eachRow.data1}</td>
                <td>{eachRow.data2}</td>
                <td>{eachRow.data3}</td>
                <td><button onClick={()=>{removeHandler(index)}}>Remove</button></td>
              </tr>
            )
       })
       
    }
     
      </tbody>
    </Table>

    </div>
    )
}

export default ReusableTable;

            {/* <table className="table">
                <tr>
                    <th>UserName</th>
                    <th>Country</th>
                    <th> State</th>
                </tr>
                
            { rowData.map((eachRow,index)=>{
                return(
                    <tr key={index}>
                    <td>{eachRow.data1}</td>
                    <td>{eachRow.data2}</td>
                    <td>{eachRow.data3}</td>
                    <td><button onClick={()=>{removeHandler(index)}}>Remove</button></td>

                    </tr> */}

                {/* )
            })
                    }
                
                
            </table> */}
      