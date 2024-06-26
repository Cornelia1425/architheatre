import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom' 

export default function block ({block}){

    const [clickTimeout, setClickTimeout] = useState(null)
    const navigate = useNavigate()

    const handleClick = ()=>{
        if(clickTimeout){
            clearTimeout(clickTimeout)
            setClickTimeout(null)
            handleDoubleClick(block.id)
        }else{
            setClickTimeout(
                setTimeout(()=>{
                    handleFlip()
                    setClickTimeout(null)
                }, 250)
            )
        }
    }

    const [isImage, setIsImage] = useState(true)
    const handleFlip = ()=>{
        setIsImage(!isImage)
    }

    const handleDoubleClick=(id)=>{
        navigate(`/showall/${id}`)
    }


    // console.log("block.cover_img: ", block.cover_img)
    return(
        <div className = "cover_single" onClick={handleClick}
        style={{cursor:'pointer'}}>
       
            {isImage? (<img className = "cover_img" src={`/assets/${block.cover_img}`} alt={block.name}/>) : ( 
            <>
            <h3>Place</h3>
            <h3>{block.name}</h3>
            </>)
             }
           
        </div>
    )
}