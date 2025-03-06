import {NavLink, Link} from 'react-router-dom'
import '../styles.css'
import {useState} from 'react'
import {Outlet} from  'react-router-dom'


export default function Navbar(){

    const [content, setContent]=useState ("content")


    return (
        <div className="grid-layout styled-container">

            <div className="header">
                <Link className="header_inner" to="/">ARCHITHEATRE</Link> 
            </div>

            <div className="sidebar">
                <Link  to="/about" onClick ={()=>setContent("THIISISABOUT")}>ABOUT</Link> 
            </div>
          
            <div className="showall">
            <Link className="showall_inner" to="/showall" onClick ={()=>setContent("SHOW ALL")} >SHOW ALL</Link> 
            </ div> 

            <div className="add">
                {/* <Link className="add_inner"  to="/add" onClick ={()=>setContent("ADD")}>ADD</Link>  */}
                <Link  to="/about" onClick ={()=>setContent("THIISISABOUT")}>LIST</Link> 
            </ div > 

          
            <div className="main">
                <Outlet/>
            </div>

            <div className="footer">
              
                    <a className="footer_inner"  href="https://www.yiranshu.com/">PORTFOLIO  </a> 
                    <a className="footer_inner"  href="https://jujo.cargo.site/">SHOP  </a> 
                    <Link className="footer_inner"  to="/contact">CONTACT  </Link> 
                    <a className="footer_inner" href="https://www.instagram.com/yiranshu/">INSTAGRAM  </a> 
           
            </ div> 

        </div>
    )
}