import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import Home from './components/Home.jsx'

import Showall from './components/Showall.jsx'

import BlockForm from './components/BlockForm.jsx'
import App from './components/App.jsx'
import Contact from './components/Contact.jsx'
import Bio from './components/Bio.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Portfolioitem from './components/Portfolioitem.jsx'


import './styles.css'


const routes =[
  {
    path:"/",
    element:<App />,
    children:[

      {
        index:true,
        element:<Home />
      },

      {
        path:"about",
        element:<About />,
        children:[
          {
            path:"portfolio",
            element:<Portfolio />
          },
          {
            path:"portfolio/:id", //portfolio/:hambergur/:pizz/:..
            element:<Portfolioitem />
          },
          {
            path:"bio",
            element:<Bio />
          }
        ]  
      },
      {
        path:"add",
        element:<BlockForm />    
      },
      {
        path:"contact",
        element:<Contact />    
      },
      {
        path:"showall",
        element:<Showall />    
      }

    ]  
  },
  
  
]

const router = createBrowserRouter(routes) //if this called hamberger, router ={hanberger}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
