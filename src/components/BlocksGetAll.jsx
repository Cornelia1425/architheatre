import React, {useState, useEffect} from 'react'
import BlockContainer from './BlockContainer'


export default function BlocksGetAll(){

    const [blocks, setBlocks] = useState([])

    useEffect(()=>{
        // fetch('http://localhost:3000/blocks')
        // fetch('https://Cornelia1425.github.io/architheatre/db.json/blocks')
        fetch('/db.json')
        .then((res=>res.json()))
        .then(blockArray=>setBlocks(blockArray.blocks))
    },[])

    // useEffect(() => {
    //     fetch('/db.json')
    //       .then((res) => res.json())
    //       .then((data) => {
    //         // Check if the data contains 'blocks' and it is an array
    //         if (Array.isArray(data.blocks)) {
    //           setBlocks(data.blocks);
    //         } else {
    //           console.error('Data does not contain a valid "blocks" array:', data);
    //         }
    //       })
    //       .catch((err) => console.error('Error fetching blocks:', err));
    //   }, []);

    console.log("blocks", blocks)

    return(

        <BlockContainer blocks={blocks}/>
    )
}