import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function BlockById(){
    const [block, setBlock] = useState({})
    const params = useParams()
    const blockId = params.id

    useEffect(()=>{
        console.log("fetching byId here ")
        fetch(`http://localhost:3001/blocks/${blockId}`)
        .then(res=>res.json())
        .then(block=>setBlock(block))
    },[])
    console.log("blockbyid cover_img: ", block.cover_img)

    return (
        <div>

            <img className = "cover_img" src={`./src/assets/${block.cover_img}`} alt={block.name}/>
     
    
        </div>
    )
}