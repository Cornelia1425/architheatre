import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import React, {useState, useEffect} from 'react'


import BlockForm from './BlockForm'



export default function App(){
    const [blocks, setBlocks] = useState ([])
 

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
            <Navbar/>
        </div>

    )
   
}