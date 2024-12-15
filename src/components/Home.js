
import { useNavigate,Link } from 'react-router-dom'
import homeimg from './images/about-img.png'
import { useEffect, useState } from 'react';
import axios from 'axios';


function Home(){
    const[data,setdata]=useState([])
    const navigate=useNavigate();

    const navigateto=(url)=>{
        navigate(url)
    }

    function getdata(){
        axios.get('http://localhost:8000/userdata')
.then((response)=>{
    console.log(response.data)
    setdata(response.data)
}).catch((error)=>{
    console.log(error);
})
    }

    useEffect(()=>{
        getdata();
    },[])

    function handledel(id){
        axios.delete(`http://localhost:8000/delRecord/${id}`)
        .then((response)=>{
            console.log(response);
            getdata()
        }).catch((e)=>{
            console.log(e);
        })
    }

    return(
        <>
        <h1>This my home page</h1>  
        <img src={homeimg} alt="home"/><br/>

        <button onClick={()=>navigate('/contact')}>Button</button>
        <button onClick={()=>navigateto('/contact')}>Event call</button>
        <button onClick={()=>navigate(-1)}>prev page</button>

        <table>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            </tr>   
            {
            data.map((item)=>{
                return(
                    <>
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.gender}</td>
                        <td><Link to={`/edit/${item._id}`}><button>Edit</button></Link></td>
                        <td><button onClick={()=>{
                            if(window.confirm('sure to want to delete')){
                                handledel(item._id)
                            }
                        }}>Delete</button></td>
                    </tr>
                    </>
                )
            })
            }        
        </table>
        </>
    )
}

export default Home