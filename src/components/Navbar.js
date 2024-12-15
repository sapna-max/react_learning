
import {NavLink} from 'react-router-dom'
import './css/navbar.css'

function Navbar(){
    return(
        <>
        <nav>      
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/about">About</NavLink>
        <NavLink to ="/Contact">Contact</NavLink>     
        <NavLink to ="/product">product</NavLink>    
        <NavLink to ="/users">Users</NavLink>      
        <NavLink to ="/search">search</NavLink>  
        <NavLink to ="/update">Update</NavLink>   
        <NavLink to ="/form">Form</NavLink>  
        <NavLink to ="/form1">Form1</NavLink>  
        <NavLink to ="/location">Location</NavLink>  
        </nav>
        </>
    )
}

export default Navbar