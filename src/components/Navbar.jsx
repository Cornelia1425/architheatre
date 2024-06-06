import {NavLink, Link} from 'react-router-dom'
import '../styles.css'
import {useState} from 'react'
import About from './About'

import BlockForm from './BlockForm'
import Showall from './Showall'
import BlockContainer from './BlockContainer'
import {Outlet} from  'react-router-dom'


export default function Navbar(){

    const [content, setContent]=useState ("content")


    /*     const handleClick=()=>{
        
            if (content === "THIISISABOUT"){
                <Link to="/about">Go to about page</Link>
                //<About />   
            }
            else if (content === "ADD"){
                <Link to="/add">Go to Add page</Link>
                //<BlockForm />    
            }
            else{
                <div className="main">
                    <div className="main_inner">CONTENT</div>
                </div> 
            }
        } */



    return (
        <div className="grid-layout styled-container">

            <div className="header">
                <Link className="header_inner" to="/">ARCHITHEATRE</Link> 
            </div>

            <div className="sidebar">
                <Link className="sidebar_inner"  to="/about" onClick ={()=>setContent("THIISISABOUT")}>THISISABOUT</Link> 
            </div>
          
       
            <div className="showall">
            <Link className="showall_inner" to="/showall" onClick ={()=>setContent("SHOW ALL")} >SHOW ALL</Link> 
            </ div> 


            <div className="add">
                <Link className="add_inner"  to="/add" onClick ={()=>setContent("ADD")}>ADD</Link> 
            </ div > 

          

          
        
            {content === "THIISISABOUT"? 
            <div className="main">
                <Link to="/about"><About />  </Link>
            </div>
   
            : 
            content === "ADD"? 
            <div className="main">
                <Link to="/add"><BlockForm />  </Link>
            </div>
           
            : 
            content == "SHOW ALL"? 
            <div className="main">
                <Link to="/showall"><Showall />  </Link>
            </div>
           
            : 
          
            
            (<div className="main">
                <div className="main_inner"  >CONTENT</div>
            </div>) }

         


    
            <div className="footer">
                <a className="footer_inner"  href="https://www.yiranshu.com/">PORTFOLIO  </a> 
                <Link className="footer_inner"  to="/about/bio">SHOP  </Link> 
                <Link className="footer_inner"  to="/contact">CONTACT  </Link> 
                <a className="footer_inner" href="https://www.instagram.com/yiranshu/">INSTAGRAM  </a> 
            </ div> 

      

        </div>
    )
}