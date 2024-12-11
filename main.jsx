import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Portfolio from './Routes/Portfolio.jsx'
import About from './Routes/About.jsx'
import Form from './components/Form.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Componente pai
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/form", element: <Form /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
