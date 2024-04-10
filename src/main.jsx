import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import App from './components/App'
import Contact from './components/Contact'
import Bio from './components/Bio'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Portfolioitem from './components/Portfolioitem'

//import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

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
        path:"contact",
        element:<Contact />    
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
