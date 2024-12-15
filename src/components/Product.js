import {Link, Outlet} from 'react-router-dom'
import './css/product.css'

function Product(){
    return(
        <>
        <div className='productnav'> 
        <Link to="shirts">Shirts</Link>
        <Link to="Jeans">Jeans</Link>
        </div>
       <Outlet/>
        </>

    )
}

export default Product