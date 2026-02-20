import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/route.jsx'
import { RouterProvider } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
