import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function BlockById(){
    const [block, setBlock] = useState({})
    const params = useParams()
    const blockId = params.id

    // useEffect(()=>{
    //     console.log("fetching byId here ")
    //     // fetch(`http://localhost:3000/blocks/${blockId}`)
    //     // fetch(`https://Cornelia1425.github.io/architheatre/db.json/blocks/${blockId}`)
    //     fetch(`/db.json`)
    //     .then(res=>res.json())
    //     .then(block=>setBlock(block))
    // },[])
    // console.log("blockbyid cover_img: ", block.cover_img)

    useEffect(() => {
        console.log("fetching byId here");
        fetch('/db.json')
            .then((res) => res.json())
            .then((data) => {
            // Find the block by its ID
            const foundBlock = data.blocks.find((b) => b.id == blockId);
            if (foundBlock) {
                setBlock(foundBlock);
            } else {
                console.log('Block not found');
            }
            })
            .catch((err) => console.error('Error fetching block by ID:', err));
        }, [blockId]); // The effect will re-run if blockId changes

        if (!block) {
        return <p>Loading...</p>;
        }

    //  // Convert newline characters to <br> tags only, no indent
    // const convertNewlinesToBreaks = (text) => {
    //     return text ? text.replace(/\n/g, '<br><br>') : '';
    // };


    // Function to convert newline characters to <br> tags and indent first line of each paragraph. NOW IT ONLY INDENT THE FIRST PARAGRAPH> WILL COME BACK TO THIS.
    const convertAndIndent = (text) => {
        if (!text) return '';

        // Split text into paragraphs
        const paragraphs = text.split('\n');

        // Process each paragraph
        return paragraphs.map((paragraph, index) => (
            <p key={index}>
                {index === 0 ? (
                    <span style={{ display: 'inline-block', marginLeft: '2em' }}>{paragraph}</span>
                ) : (
                    <span>{paragraph}</span>
                )}
            </p>
        ))
    }

    return (
        <div>
             <h1>{block.name}</h1>
             {/* <img src={block.cover_img} alt={block.name} />  */}
           
            {/* {block.cover_img && (
                <img className="cover_img" src={`/assets/${block.cover_img}`} alt={block.name} />
            )} */}
            <br />
            {/* {block.words && (
                <div
                    className="words"
                    dangerouslySetInnerHTML={{ __html: convertNewlinesToBreaks(block.words) }}
                />
            )} */}
            {block.words && convertAndIndent(block.words)}
            
    
        </div>
    )
}