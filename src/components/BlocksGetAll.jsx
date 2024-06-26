import React, {useState, useEffect} from 'react'
import BlockContainer from './BlockContainer'


export default function BlocksGetAll(){

    const [blocks, setBlocks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/blocks')
        .then((res=>res.json()))
        .then(blockArray=>setBlocks(blockArray))
    },[])
    console.log("blocks", blocks)

    return(

        <BlockContainer blocks={blocks}/>
    )
}