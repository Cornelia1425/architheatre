import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import React, {useState, useEffect} from 'react'


import BlockForm from './BlockForm'



export default function App(){
    const [blocks, setBlocks] = useState ([])
 

    //this is for BlockForm
    function createBlock(name, cover_img, words){
    // fetch('http://localhost:3000/blocks',{
    // fetch('https://Cornelia1425.github.io/architheatre/db.json/blocks',{
    fetch('/db.json/blocks',{
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
        <div className="home">
            <Navbar/>
        </div>

    )
   
}