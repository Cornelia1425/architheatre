import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
        <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about/portfolio">Portfolio</Link>
        <Link to="/about/bio">Bio</Link>
        <Link to="/contact">Contact</Link>
        </div>
    )
}