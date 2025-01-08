import { useEffect } from 'react'
import {useParams} from 'react-router-dom'


export default function Portfolioitem(){

    const params = useParams()
    console.log (params)

    useEffect(()=>{
        // fetch(`http://localhost:3000/portfolio/${params.id}`)
        fetch(`https://Cornelia1425.github.io/architheatre/db.json/portfolio/${params.id}`)
        fetch(`/db.json/portfolio/${params.id}`)
        .then(res=>res.json())
        .then(data=> setItem(data))
    }, [])

    return (
        <div>
            <h2>portfolio item with an id of???{params.id}</h2>
            <h2>{item.name}</h2>
        
        </div>
    )
}