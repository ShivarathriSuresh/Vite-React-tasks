import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import YoutubeButton from './Components/Class comp/youtubebutton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <YoutubeButton/>

  </StrictMode>
)
