
import React from 'react'
import FakeDataComponent from './Components/Hooks in func/useEffect/fetchData'
import CustomBulb from './Components/Class comp/bulbon-off'
import CustomFrontPage from './Components/React Bootstrap/Bootstrap exam'



function App() {
  return (
    <div>
     <h1><u>Bulb ON / OFF :</u></h1>
     <CustomBulb/><br/>

      <h1><u>API Example</u></h1>
     <CustomFrontPage/>

    </div>
  )
}

export default App


