import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Component/LoginComponent/Login.jsx';
import Register from './Component/RegisterComponent/Register.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/Register',
    element:<Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
