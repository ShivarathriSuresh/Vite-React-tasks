import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavigationStack } from './Components/Navigationbar/navigationstack.jsx'
import { BrowserRouter } from 'react-router-dom'
import FakeDataComponent from './Components/Hooks in func/useEffect/fetchData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   

   <App/> 
  </StrictMode>
)
