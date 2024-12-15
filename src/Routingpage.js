import { Route, Routes } from "react-router-dom"

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Shirts from './components/Shirts'
import Jeans from './components/Jeans'
import Users from './components/Users'
import UsersDetails from './components/UsersDetails'
import Search from './components/Search'
import Update from './components/Update'
import Form from './components/Form'
import Form1 from './components/Form1'
import EditForm from './components/EditForm'
import Location from './components/Location'
import Mealdetails from './components/Mealdetails'

function Routingpage(){
    return(
       <>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/product' element={<Product/>}>
            <Route path="shirts" element={<Shirts/>}/>
            <Route path="jeans" element={<Jeans/>}/>
        </Route>

        <Route path='/users' element={<Users/>}>
                <Route path=':id' element={<UsersDetails/>}/>
        </Route>       

        <Route path='/search' element={<Search/>}/>
        <Route path='/update' element={<Update city="mumbai"/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/form1' element={<Form1/>}/>
        <Route path='/edit/:id' element={<EditForm/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/mealdetails/:id' element={<Mealdetails/>}/>
       </Routes>
       </>
    )
}

export default Routingpage