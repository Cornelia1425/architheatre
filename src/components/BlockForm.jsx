import {useState} from 'react'

export default function BlockForm({createBlock}){
    
    const [name, setName] = useState("")
    const [cover_img, setCover_img] = useState ("")
    const [words, setWords] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        createBlock(name, cover_img, words)
      }

    return (

        <>
            <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name: </label>
                <input name="name"  onChange={e=>setName(e.target.value)} placeholder="name" value={name}/>

            <label htmlFor="cover_img">Cover_img: </label>
                <input name="cover_img" onChange={e=>setCover_img(e.target.value)} placeholder="image" />

            <label htmlFor="words">Words: </label>
                <input name="words"  onChange={e=>setWords(e.target.value)} placeholder="write here"/>

            <input type="submit" value="Add Block" />

            </form>
        </>
    )
}