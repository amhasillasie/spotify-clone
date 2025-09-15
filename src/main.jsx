import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import PlayerContextProvider from './context/playerContext.jsx'
=======
>>>>>>> ae60466884b57c1e4b1c7151759f1a21df253993

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
   <PlayerContextProvider>
    <App />
   </PlayerContextProvider>
=======
        <App />
>>>>>>> ae60466884b57c1e4b1c7151759f1a21df253993
    </BrowserRouter>
  </StrictMode>,
)
