import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import React, {useState, useEffect} from 'react'
// import ReactDOM from 'react-dom/client'
import Block from './Block'
import BlockForm from './BlockForm'
import BlockContainer from './BlockContainer'


export default function App(){
    const [blocks, setBlocks] = useState ([])
    useEffect(()=>{
    fetch('http://localhost:3001/blocks')
    .then(res=>res.json())
    .then(blocksArray =>{
        setBlocks(blocksArray)
        console.log(blocksArray)
    })

    },[])
    console.log("blocks: ",blocks)

    //this is for BlockForm
    function createBlock(name, cover_img, words){
    fetch('http://localhost:3001/blocks',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify({name, cover_img, words})
    })
    .then(res=>res.json())
    .then(newBlock=>
        setBlocks([...blocks,newBlock])
    )}

    return (
        <div>



            <Navbar>
         
          
            
            </Navbar>
            <BlockContainer blocks={blocks}/>

            <div className="form">
                <BlockForm createBlock={createBlock}/>
            </div>

           
         {/*    <Outlet />  */}
          {/*   <h1>ARCHITHEATRE</h1>
            <h2>Grid Layout</h2> */}

         {/*    <div className="grid-layout styled-container" >

                <div class="header">HEADER</div>
                <div class="showall">SHOW ALL</div>
                <div class="sidebar">SIDEBAR</div>
                <div class="main">MAIN</div>
                <div class="footer">FOOTER</div>

            </div> */}
        </div>

    )
   
}