import React, {useState, useEffect} from 'react'
import BlockContainer from './BlockContainer'


export default function BlocksGetAll(){

    const [blocks, setBlocks] = useState([])

    useEffect(()=>{
        // fetch('http://localhost:3000/blocks')
        // fetch('https://Cornelia1425.github.io/architheatre/db.json/blocks')
        fetch('/db.json/blocks')
        .then((res=>res.json()))
        .then(blockArray=>setBlocks(blockArray))
    },[])
    console.log("blocks", blocks)

    return(

        <BlockContainer blocks={blocks}/>
    )
}