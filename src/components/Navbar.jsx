import {Link} from 'react-router-dom'
import '../styles.css'
import {useState} from 'react'
import About from './About'
import {Outlet} from  'react-router-dom'

export default function Navbar(){

    const [content, setContent]=useState ("content")


    return (
        <div className="grid-layout styled-container">

            <div className="header">
                <Link className="header_inner" to="/">ARCHITHEATRE</Link> 
            </div>

            <div className="sidebar">
                <Link className="sidebar_inner"  to="/about" onClick ={()=>setContent("THIISISABOUT")}>THISISABOUT</Link> 
            </div>

            
            {content === "THIISISABOUT"? 
            <About />   
            : 
            <div className="main">
                <div className="main_inner"  > CONTENT</div>
            </div> }
                
          

            <div className="add">
                <Link className="add_inner"  to="/add">ADD</Link> 
            </ div >
    
            <div className="footer">
                <a className="footer_inner"  href="https://www.yiranshu.com/">PORTFOLIO  </a> 
                <Link className="footer_inner"  to="/about/bio">SHOP  </Link> 
                <Link className="footer_inner"  to="/contact">CONTACT  </Link> 
                <a className="footer_inner" href="https://www.instagram.com/yiranshu/">INSTAGRAM  </a> 
            </ div> 

            <div className="showall">
            <Link className="showall_inner" to="/showall">SHOW ALL</Link> {/* show-link */}
            </ div> 

        </div>
    )
}