import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'

export default function App(){

    return
    (
        <div>
            <Navbar>
            <h1>it's my project</h1>
            </Navbar>
            <Outlet />
        </div>

    )
   
}