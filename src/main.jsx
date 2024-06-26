import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import Home from './components/Home.jsx'

// import Showall from './components/Showall.jsx'


import BlockForm from './components/BlockForm.jsx'
import BlockContainer from './components/BlockContainer.jsx'
import App from './components/App.jsx'
import Contact from './components/Contact.jsx'
// import Bio from './components/Bio.jsx'
import About from './components/About.jsx'

import BlockById from './components/BlockById.jsx'

// import Portfolio from './components/Portfolio.jsx'
// import Portfolioitem from './components/Portfolioitem.jsx'


import './styles.css'
import BlocksGetAll from './components/BlocksGetAll.jsx'


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
        element:<BlocksGetAll />    
      }
      ,
      {
        path:"showall/:id",
        element:<BlockById />    
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
