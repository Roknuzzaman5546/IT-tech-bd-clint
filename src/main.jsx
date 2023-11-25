import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routs/Routs.jsx';
import Authprovider from './Components/Provaider/Authprovider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <div className=' max-w-screen-lg mx-auto'>
        <RouterProvider router={router} />
      </div>
    </Authprovider>
  </React.StrictMode>,
)
