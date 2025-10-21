import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BoasVindas from './boasvindas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BoasVindas nome="gabryel"/ >
   <BoasVindas nome="luana"/ >
  </StrictMode>,
)
