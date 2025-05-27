import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //componente
import { BrowserRouter } from 'react-router-dom'

// se conecta directamente al index.html por medio del script
//los comentario dentre de jsx se hacen con {}, se puden imprimir vai {var}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App /> {/*comentairo*/}
    </BrowserRouter>
  </StrictMode>,
)
