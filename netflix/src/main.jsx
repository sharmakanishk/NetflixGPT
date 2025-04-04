import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router';
import SignIn from './components/SignIn.jsx';
import Browse from './components/Browse.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<SignIn/>
  },
  {
    path: "/browse",
    element:<Browse/>
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
