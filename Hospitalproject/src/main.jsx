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
import Upload from './Component/Upload/Upload.jsx';
import Problems from './Component/Problems/Problem.jsx';
import Store from './Store/Store.js';
import {Provider} from 'react-redux';
import Edit from './Component/Edit/EditPage.jsx';
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
  },
  {
    path:'/Upload',
    element:<Upload/>
  },
  {
    path:'/PatientProblems',
    element:<Problems/>
  },
  {
    path:'/Edit',
    element:<Edit/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
