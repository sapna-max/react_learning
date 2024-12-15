import { NavLink, Outlet } from "react-router-dom"

function Users(){

    return(
        <>
        <h1>this is my users </h1>
        <NavLink to ="/users/1">Users 1</NavLink>     
        <NavLink to ="/users/2">Users 2</NavLink>    
        <NavLink to ="/users/3">Users 3</NavLink>  
        <Outlet/>
        </>
    )
}

export default Users