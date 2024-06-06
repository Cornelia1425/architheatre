import React, {useState} from 'react'
// import {useHistory} from 'react-router-dom'

export default function block ({block}){

    const [isImage, setIsImage] = useState(true)
    const handleFlip = ()=>{
        setIsImage(!isImage)
    }
    console.log("block.cover_img: ", block.cover_img)
    return(
        <div className = "cover_single" onClick={handleFlip}>
            {isImage? (<img className = "cover_img" src={`./src/assets/${block.cover_img}`} alt={block.name}/>) : ( 
            <>
            <h3>Place</h3>
            <h3>{block.name}</h3>
            </>)
             }
           
        </div>
    )
}