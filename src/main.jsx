import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import HitungGrade from './components/HitungGrade.jsx'
import TargetGrade from './components/TargetGrade.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/hitung-grade',
    element: <HitungGrade />,
  },
  {
    path: '/target-grade',
    element: <TargetGrade />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
