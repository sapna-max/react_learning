import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


function Form(){
    const [username,setusername]=useState('');
    const [email,setemail]=useState('');  
    const [password,setpassword]=useState('');
    const [mobile,setmobile]=useState(''); 
    const [selectedValue,setSelectedValue,] = useState(); 
    const [selectedbox,setSelectedbox,] = useState(); 
    const navigate = useNavigate();

    // alert(selectedbox)

       
    const handleSubmit=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:8000/reactform",{
            _id:Math.floor(Math.random()*1000),
            username:username,
            email:email,
            password:password,
            mobile:mobile,
            gender:selectedValue,
            subject:selectedbox
        }).then((response)=>{
            console.log(response)
            navigate('/');
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <>
    <form onSubmit={handleSubmit}>      
        <label>Enter Username</label>
        <input type="text" name="username" value={username} onChange={(e)=>setusername(e.target.value)}/>
        <br/><br/>
        <label>Enter email</label>
        <input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <br/><br/>
        <label>Enter password</label>
        <input type="text" name="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <br/><br/>
        <label>Enter mobile no</label>
        <input type="text" name="mobile" value={mobile} onChange={(e)=>setmobile(e.target.value)}/>
        <br/><br/>
        <label>select subject</label><br/>
        <input type="checkbox" name="java" value="java" checked={selectedbox ==="java"} onChange={(e) =>setSelectedbox(e.target.value)}/>Java
        <input type="checkbox" name="php" value="php" checked={selectedbox ==="php"} onChange={(e) =>setSelectedbox(e.target.value)}/>Php
        <input type="checkbox" name="react" value="react" checked={selectedbox ==="react"} onChange={(e) =>setSelectedbox(e.target.value)}/>React
        <input type="checkbox" name="react" value="python" checked={selectedbox ==="python"} onChange={(e) =>setSelectedbox(e.target.value)}/>Python<br/>
        <label>Select Gender</label><br/>
        <input type="radio" name="gender" value="Male"  
        checked={selectedValue ==="Male"} onChange={(e) =>setSelectedValue(e.target.value)}/>Male
          <input type="radio" name="gender" value="Female"  
        checked={selectedValue ==="Female"} onChange={(e) =>setSelectedValue(e.target.value)}/>Female        
        <input type="submit" name="Register" value="Register"/>
    </form>
    <span>
    {username}
    {email}
    {password}
    {mobile}
    {selectedValue}
    {selectedbox}</span>
        </>       
    )
}
export default Form
