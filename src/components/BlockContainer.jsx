import Block from './Block'

export default function BlockContainer({blocks}){

    const blockCovers = blocks.map( block =>{
        return <Block key={block.id} block={block}/>
    }

    )
    return(
        <>
        <div className="covers_container">
           {blockCovers}
        </div>
        </>    
    )
    
}